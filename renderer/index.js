const content = 
{
    chromedino: `<iframe src='https://chromedino.com' title='chrome'></iframe>`,
    code: `<iframe src='https://github1s.com' title='code'></iframe>`,
    edgesurf: `<iframe src='https://rbeesley.github.io/MicrosoftEdge-SURF' title='edge'></iframe>`,
    ersys:
    `
        <h1 id='title'>
            ==========================
            <br>
            <a class='title' href='http://wylerror.github.io/ersys' rel='noopener' target='_blank'>Error</a>
            <a class='title' href='https://github.com/wylerror/ersys' rel='noopener' target='_blank'>System</a>
        </h1>
        <br>
        Welcome to Error System :)
        <br>
        wylerror :)
        <br>
        <br>
        <h1>==========================</h1>
    `,
    msedge:
    `
        <div id='msedge'>
            <form action='https://bing.com/search' target='_blank'>
                <input name='q' placeholder='Bing'>
                <button type='submit'>Search</button>
            </form>
        </div>
    `
}
const Set = id =>
{
    let $ = document.getElementById('content')
    $.innerHTML = content[id]
    if (id === 'ersys')
    {
        $.removeEventListener('mouseover', () => $.style.animation = 'none')
        $.addEventListener('mouseover', () => $.style.animation = 'zoomin .8s ease-in-out, zoomout .8s .8s ease-in-out')
    }
    else
    {
        $.removeEventListener('mouseover', () => $.style.animation = 'zoomin .8s ease-in-out, zoomout .8s .8s ease-in-out')
        $.addEventListener('mouseover', () => $.style.animation = 'none')
    }
}
setInterval(() => document.getElementById('time').innerHTML = new Date().toLocaleString(), 1000)