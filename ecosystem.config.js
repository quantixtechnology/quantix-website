module.exports = {
  apps: [
    {
      name: 'quantix-website',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/quantix-website',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      restart_delay: 3000,
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
        NEXT_PUBLIC_LEADS_API: 'https://api.quantixtechnology.in/api/public/leads',
      },
      error_file: '/var/log/pm2/quantix-website-error.log',
      out_file: '/var/log/pm2/quantix-website-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
    },
  ],
};
