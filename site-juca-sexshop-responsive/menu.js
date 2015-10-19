		function onresize() {
			var windowWidth = screen.width;
			var device = 'mobile';

			if (windowWidth > 800) {
				device = 'desktop';
			}

			alterarImagens(device);

			console.log(windowWidth);	
			console.log(device);	
		}

		function alterarImagens(device) {
			var logo = document.getElementById("logo");
			logo.setAttribute('src', 'images/' + device + '/logo.png');
		}

		window.addEventListener("resize", onresize);