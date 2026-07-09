const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

//Variable que guarda cada uno de los logos con un diccionario
const LOGO_MAP = {
  'C#': 'csharp/csharp-original.svg',
  Java: 'java/java-original.svg',
  Python: 'python/python-original.svg',
  JavaScript: 'javascript/javascript-original.svg',
  '.NET': 'dot-net/dot-net-original.svg',
  '.NET 8': 'dot-net/dot-net-original.svg',
  'ASP.NET Core': 'dotnetcore/dotnetcore-original.svg',
  'ASP.NET Core Web API': 'dotnetcore/dotnetcore-original.svg',
  SQL: 'azuresqldatabase/azuresqldatabase-original.svg',
  'GitHub Actions': 'githubactions/githubactions-original.svg',
  FastAPI: 'fastapi/fastapi-original.svg',
  'Node.js': 'nodejs/nodejs-original.svg',
  React: 'react/react-original.svg',
  'React Native': 'react/react-original.svg',
  Vite: 'vitejs/vitejs-original.svg',
  HTML: 'html5/html5-original.svg',
  CSS: 'css3/css3-original.svg',
  PostgreSQL: 'postgresql/postgresql-original.svg',
  'PostgreSQL 17': 'postgresql/postgresql-original.svg',
  MySQL: 'mysql/mysql-original.svg',
  Git: 'git/git-original.svg',
  Docker: 'docker/docker-original.svg',
  'Docker Compose': 'docker/docker-original.svg',
  'Linux básico': 'linux/linux-original.svg',
};

export function logoFor(label) {
  return LOGO_MAP[label] ? CDN + LOGO_MAP[label] : null;
}

export function withLogos(list) {
  return list.map((label) => ({ label, logo: logoFor(label), hasLogo: !!logoFor(label) }));
}
