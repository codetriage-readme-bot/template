<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>pageTitle</title>		<!-- build:remove:dist -->
		<link rel="stylesheet" href="libs/bootstrap/dist/css/bootstrap.min.css">
		<link rel="stylesheet" href="libs/slick-carousel/slick/slick.css">
		<link rel="stylesheet" href="assets/css/main.css">
		<link rel="stylesheet" href="assets/css/sprites.css">
		<link rel="stylesheet" href="assets/fonts/fonts.css">
		<!-- /build -->
	</head>
	<body>
		<header>
			<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only"></span><span class="icon-bar"></span><span class="icon-bar"></span>
							<span
							class="icon-bar"></span>
						</button><a class="navbar-brand icon-icon" href="#header"></a>

					</div>
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav" id="scroll-menu">
							<li><a href="#mission">One				</a>
							</li>
							<li><a href="#education">Two</a>
							</li>
							<li><a href="#sciense">Three</a>
							</li>
							<li><a href="#contacts">Four</a>
							</li>
							<li><a data-toggle="modal" data-target=".bs-example-modal-lg">Ajax Modal Form</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<section>
			<input type="checkbox" checked>
		</section>
		<footer>
			<div id="content"></div>
		</footer>
		<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
		aria-labelledby="myLargeModalLabel" aria-hidden="true" id="myLargeModalLabel">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="background">
						<div class="modal-header">
							<button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
							 <h4 class="modal-title">Example</h4>

						</div>
						<form action="POST" id="form-proposal">
							<div class="input-group ">
								<input class="form-control" type="text" placeholder="email" name="email">
								<input class="form-control" type="password" placeholder="password" name="password">
							</div>
							<button class="btn center-block" type="submit" name="do_login">Send Request</button>
						</form>
					</div>
				</div>
			</div>
		</div>		<!-- build:remove:dist -->
		<script src="libs/jquery/dist/jquery.min.js"></script>
		<script src="libs/bootstrap/dist/js/bootstrap.min.js"></script>
		<script src="assets/js/build.js"></script>
		<!-- /build -->
	</body>

</html>