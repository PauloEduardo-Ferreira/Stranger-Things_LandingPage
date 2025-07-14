function switchTheme() {
    const music = document.getElementById('music');
    const source = music.querySelector('source');

    // Troca o src da música
    if (source.src.includes('normal-world.mpeg')) {
        source.src = 'src/musics/inverted-world.mpeg';
    } else {
        source.src = 'src/musics/normal-world.mpeg'; 
    }

    music.load(); 

    // Espera o áudio carregar antes de dar play
    music.oncanplaythrough = () => {
        music.play();
        music.volume = 0.3;
    };

    // Alterna o tema visual
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}