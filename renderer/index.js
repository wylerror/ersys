const content = 
{
    code: `<iframe src='https://github1s.com' title='code'></iframe>`,
    ersys:
    `
        <h1 id='title'>
            <span>==========================</span>
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
        <h1>
            <span>==========================</span>
            <br>
            <button onclick='Set("setup")' type='button'>Set Up</button>
        </h1>
    `,
    msedge:
    `
        <div id='msedge'>
            <form action='https://bing.com/search' target='_blank'>
                <input name='q' placeholder='Bing'>
                <button type='submit'>Search</button>
            </form>
        </div>
    `,
    setup:
    `
    `
}
const Set = id =>
{
    let $ = document.getElementById('content')
    $.innerHTML = content[id]
    if (id === 'ersys')
    {
        $.removeEventListener('mouseover', () => $.style.animation = 'none')
        $.addEventListener('mouseover', () => $.style.animation = 'zoomout .8s ease-in-out, zoomin .8s .8s ease-in-out')
    }
    else
    {
        $.removeEventListener('mouseover', () => $.style.animation = 'zoomout .8s ease-in-out, zoomin .8s .8s ease-in-out')
        $.addEventListener('mouseover', () => $.style.animation = 'none')
    }
}
setInterval(() => document.getElementById('time').innerHTML = new Date().toLocaleString(), 1000)