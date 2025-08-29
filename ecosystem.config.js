// Configuration PM2 pour cPanel
module.exports = {
  apps: [
    {
      name: 'mon-site-web-api',
      script: 'dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      max_memory_restart: '500M',
      restart_delay: 4000,
      watch: false,
      ignore_watch: ['node_modules', 'logs', 'uploads'],
      node_args: '--max-old-space-size=512'
    }
  ]
};