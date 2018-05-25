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
	</div><!-- .entry-content -->
</article><!-- #post-## -->
