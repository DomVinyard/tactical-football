// Simple GitHub auth test script

async function testAuth() {
  console.log('Testing GitHub authentication...');
  console.log('Making request to: https://api.github.com/user');
  
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: "Bearer PLACEHOLDER_TOKEN",
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Sauna-Test"
    }
  });
  
  console.log('Response status:', response.status);
  console.log('Response ok:', response.ok);
  
  if (response.ok) {
    const user = await response.json();
    console.log('✅ SUCCESS!');
    console.log('Username:', user.login);
    console.log('Name:', user.name);
  } else {
    const error = await response.text();
    console.error('❌ FAILED');
    console.error('Error:', error);
  }
}

await testAuth();
