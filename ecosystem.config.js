module.exports = {
  apps: [
    {
      name: "quantix-website",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/quantix-website",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
