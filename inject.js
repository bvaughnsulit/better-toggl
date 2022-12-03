'use strict'

window.addEventListener('click', (_) => {

  const events = document.getElementsByClassName('rbc-event-content')

  for (let i = 0; i < events.length; i++){
    console.log(events.length)
    const eventNode = events[i].firstChild
    const title = eventNode.getAttribute('title') 
    const timeRange = /\((.*)\)/.exec(title)[1]
    
    const eventMeta = eventNode.lastChild
    // const timeRangeText = document.createTextNode(timeRange)

    if (eventMeta) {
      eventMeta.innerText = timeRange
    }

    // eventMeta.innerText = timeRange 
  }

});
