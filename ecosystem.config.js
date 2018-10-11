module.exports = {
  apps: [
    {
      append_env_to_name: true,
      name: 'lerna-react-graphql-starter-kit-frontend',
      cwd: 'apps/frontend/',
      script: 'start.sh',
      watch: true,
      ignore_watch: ['node_modules', 'dist', '.build'],
      env_production: {
        NODE_ENV: 'production',
      },
      env_staging: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {},
    staging: {},
  },
};
