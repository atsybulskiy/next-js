import { User } from '@types';

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 60
    }
  });

  return response.json();
}

export const Users = async () => {
  const users: User[] = await getUsers();

  return (
    <div>
      <div className="flex flex-col mt-6">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900">Users</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center space-x-4 p-2 md:px-5 md:py-3 bg-white shadow rounded-lg"
              >
                <div className="font-semibold text-lg">{user.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
