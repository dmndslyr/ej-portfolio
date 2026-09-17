import { NextResponse } from "next/server";

const GITHUB_USERNAME = "dmndslyr";

const query = `
  query ($login: String!) {
    user(login: $login) {
      login
      url
      contributionsCollection {
        contributionCalendar {
          totalContributions
          months {
            name
            year
            firstDay
            totalWeeks
          }
          weeks {
            firstDay
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN is not configured." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          login: GITHUB_USERNAME,
        },
      }),

      // Revalidate the contribution data periodically.
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `GitHub API returned ${response.status}.`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.errors?.length) {
      return NextResponse.json(
        {
          error: data.errors[0]?.message ?? "GitHub API error.",
        },
        { status: 500 }
      );
    }

    const user = data.data?.user;

    if (!user) {
      return NextResponse.json(
        { error: "GitHub user not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      username: user.login,
      profileUrl: user.url,
      calendar: user.contributionsCollection.contributionCalendar,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch GitHub contributions." },
      { status: 500 }
    );
  }
}