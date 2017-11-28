import React from 'react'

const Docs = () => {
  return (
    <div className='docs-container formatted'>
      <div className='docs-unit'>
        <h3>What is LionBot?</h3>
        <p>LionBot is a tool for Twitch streamers, making it easy for them to offload the task of answering commonly asked questions.</p>
      </div>
      <div className='docs-unit'>
        <h3>LionBot Saves Time</h3>
        <p>Do you have to answer a question about your mouse sensitivity every five minutes? Let LionBot take care of that for you.</p>
        <p>Simply click the + button on the main Dashboard page.</p>
        <p>Now it's time to enter your command. For instance, you could type something like...</p>
        <code>!sens</code>
        <p>Now, for the response, we would enter something like...</p>
        <code>Mr. Example's sensitivity is 1.0, at 800 dpi!</code>
        <p>Excellent!</p>
      </div>
      <div className='docs-unit'>
        <h3>Enabling Commands</h3>
        <p>Now, on your Dashboard, you'll see something like this...</p>
        <img className='example-command' src='/example-command.png' />
        <p>See that bright green toggle? It allows you to enable or disable your new command. By default, new commands created are set to 'enabled'. If you'd like to disable the command, just give that toggle a click!</p>
        <img className='example-command' src='/example-disabled.png' />
        <p>With the toggle to the left, the command will no longer be recognized when called in your Twitch chat.</p>
      </div>
      <div className='docs-unit'>
        <h3>Using Your New Command</h3>
        <p>Let's try our our new command! In this case, we just type '!sens' in our chat...</p>
        <img className='example-command' src='/example-chat.png' />
        <p>Look who's here to help!</p>
        <img className='example-command' src='/example-response.png' />
      </div>
      <div className='docs-unit'>
        <h3>It's That Simple</h3>
        <p>LionBot helps make streaming easier.</p>
      </div>
    </div>
  )
}

export default Docs
