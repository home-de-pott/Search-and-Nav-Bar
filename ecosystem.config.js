module.exports = {
  apps: [{
    name: 'Search-And-Nav-Bar',
    script: './client/src/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-216-242-187.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Header-FEC.pem',
      ref: 'origin/master',
      repo: 'https://github.com/home-de-pott/Search-and-Nav-Bar.git',
      path: '/home/ubuntu/Header-FEC',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}