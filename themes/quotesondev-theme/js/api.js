(function($) {
    $('#show-post').on('click', function(event) {
        event.preventDefault();
        
        /**
         * source https://css-tricks.com/using-the-wp-api-to-fetch-posts/ 05/26/2018
         */
        $.ajax({
            method: 'GET',
            url: qod_vars.rest_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function ( data ) {
                var quote = data[0].content.rendered;
                var author = data[0].title.rendered;
                var quote_source = data[0]._qod_quote_source;
                var quote_source_url = data[0]._qod_quote_source_url;

                $( '#quote-author' ).text(author);
                $( '#quote-text' ).html(quote);

                if (quote_source) {
                    if (quote_source_url) {
                        $('#quote-source').html(', <a href="' + quote_source_url + '" target="_blank">' + quote_source + '</a>');
                    }
                    else {
                        $('#quote-source').text(', ' + quote_source);
                    }
                }
                else {
                    $('#quote-source').html('');
                }
            },
            cache: false
        });

    });

    $('#submit-quote').on('click', function(event) {
        event.preventDefault();

        var author = $('#author').val();
        var quote = $('#quote').val();
        var source = $('#source').val();
        var url = $('#url').val();

        var data = {
            title: author,
            content: quote,
            _qod_quote_source: source,
            _qod_quote_source_url: url,
            status: 'publish'
        };

        $.ajax({
            method: 'POST',
            url: qod_vars.rest_url + 'wp/v2/posts',
            data: data,
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'X-WP-Nonce', qod_vars.wpapi_nonce );
            },
            success : function() {
                alert( 'Your quote has been successfully added!' );
            },
            fail : function() {
                alert( ' There was an error while adding your quote. ');
            }

        });

        $('#author').val('');
        $('#quote').val('');
        $('#source').val('');
        $('#url').val('');

    });
})(jQuery);

