import { githubService } from '~/services/remote/gists';

export default async function Page() {
  const gists = await githubService.getGists();

  return (
    <div className="md:col-span-3 overflow-hidden">
      <h1 className="text-2xl my-4 font-semibold text-center">🚧 WIP 🚧</h1>

      {gists.map((gist) => {
        return Object.entries(gist.files).map(([filename, file]) => {
          return (
            <div key={gist.id}>
              <p>{filename}</p>
              <div className="overflow-x-auto">
                <pre>{JSON.stringify(file, null, 2)}</pre>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
}
