function playM3u8(e){if(Hls.isSupported()){var o=document.getElementById("video");o.volume=.3;var t=new Hls,n=decodeURIComponent(e);t.loadSource(n),t.attachMedia(o),t.on(Hls.Events.MANIFEST_PARSED,function(){o.play()}),document.title=e}}playM3u8(window.location.href.split("yes=")[1]);
