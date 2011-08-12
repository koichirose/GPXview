<?php
//directory name
$dir = 'gpx';

if ($handle = opendir($dir)) {
    while (false !== ($file = readdir($handle))) {
		if ($file != "." && $file != "..") { ?>
		<a href="http://localhost:8888/GPXview/<?php echo $dir.'/'.$file;?>"><?php echo $file;?></a>
	<?php }
    }
    closedir($handle);
}
?>
