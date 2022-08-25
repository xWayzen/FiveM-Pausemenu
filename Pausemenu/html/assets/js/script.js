$('body').hide();

window.addEventListener('message', (event) => {
    if (event.data.type === "ui") {
        if (event.data.status) {
            $('body').fadeIn();
        } else {
            $('body').fadeOut();
        }
    }
});

document.onkeydown = e => {
    if (e.keyCode === 27)
        $.post('http://MxEchap/close', JSON.stringify({}));
}

document.onclick = e => {
    switch (e.target.id) {
        case "riprendi": 
            $.post('http://MxEchap/close', JSON.stringify({}));
            break;
        case "mappa":
            $.post('http://MxEchap/map', JSON.stringify({}));
            break;
        case "impostazioni":
            $.post('http://MxEchap/settings', JSON.stringify({}));
            break;
        case "discord":
            window.invokeNative('openUrl', 'https://discord.gg/cfx')
            $.post('http://MxEchap/close', JSON.stringify({}));
            break;
        case "quit":
            $.post('http://MxEchap/quit', JSON.stringify({}));
            break;
    }
}