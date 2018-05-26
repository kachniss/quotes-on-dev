<?php
/**
 * Template part for displaying posts.
 *
 * @package QOD_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_excerpt(); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<span class="author"><?php the_title(); ?></span>
		
		<?php
			$source = get_post_meta(get_the_ID(),'_qod_quote_source' );
			$source_url = get_post_meta(get_the_ID(),'_qod_quote_source_url' );
			if ($source) {
				$source = $source[0];

				if ($source_url) {
					$source_url = $source_url[0];
					echo '<span>, <a href="' . $source_url . '" target="_blank">' . $source . '</a></span>';
				}
				else {
					echo '<span>, ' . $source . '</span>';
				}
			}
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
