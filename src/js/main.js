function switchTheme() {
    const music = document.getElementById('music')
    const source = music.querySelector('source')

    if (source.src.includes('normal-world.mpeg')) {
        source.src = 'src/musics/inverted-world.mpeg'
    } else {
        source.src = 'src/normal-world.mpeg'
    }

    music.load()
    music.play()

    music.volume = 0.3;

    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')
}