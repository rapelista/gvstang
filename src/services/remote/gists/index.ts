import { Octokit } from '@octokit/core';

class GithubService {
  private apiClient: Octokit;

  constructor({ auth }: { auth: string }) {
    this.apiClient = new Octokit({
      auth,
      request: {
        fetch: (url: string, options: RequestInit) => {
          return fetch(url, {
            ...options,
            cache: 'force-cache',
            next: { revalidate: 3600 },
          });
        },
      },
    });
  }

  public async getGists() {
    const response = await this.apiClient.request('GET /gists', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        accept: 'application/vnd.github+json',
      },
    });

    return response.data;
  }
}

export const githubService = new GithubService({
  auth: process.env.GITHUB_PAT!,
});
