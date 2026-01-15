export const metadata = {
  id: "test-auth",
  name: "Test GitHub Auth with Export",
  description: "Testing if export metadata affects auth"
};

console.log('Script with export metadata running...');

const response = await fetch('https://api.github.com/user', {
  headers: {
    Authorization: "Bearer PLACEHOLDER_TOKEN",
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Sauna-Test"
  }
});

console.log('Status:', response.status);

if (response.ok) {
  const user = await response.json();
  console.log('✅ Auth works with export metadata');
  console.log('User:', user.login);
} else {
  console.error('❌ Auth failed with export metadata');
  console.error('Error:', await response.text());
}
