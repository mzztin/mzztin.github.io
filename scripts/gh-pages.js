const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/mzztin.github.io',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mzztin/mzztin.github.io.git',
        user: {
            name: 'mzztin',
            email: 'exze.real@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
