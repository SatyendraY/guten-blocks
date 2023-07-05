<?php
/**
 * Plugin Name:       Guten Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       guten-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 
function create_block_guten_blocks_block_init() {
	$block = array( '',
    'blocks/controls','blocks/google-map','blocks/rating','blocks/spacer','blocks/column',
    'blocks/open-ai','blocks/animate-heading');

	foreach($block as $json){
		register_block_type( __DIR__ . '/build/'.$json );
	}
	
	// register_block_type( __DIR__ . '/build' );


    register_block_type( __DIR__ . '/build/blocks/product-slider'
    
    , array('render_callback'=>'ubp_slider_product')
    
    );

    register_block_type( __DIR__ . '/build/blocks/product-slider-one'
    
    , array('render_callback'=>'ubp_grid_product')
    
    );

    register_block_type( __DIR__ . '/build/blocks/post-grid'
    
    , array('render_callback'=>'ubp_post_grid')
    
    );

    register_block_type( __DIR__ . '/build/blocks/appofox'
    
    , array('render_callback'=>'ubp_appofox')
    
    );

    register_block_type( __DIR__ . '/build/blocks/context'
    
    // , array('render_callback'=>'ubp_usecontext')
    
    );

	}
add_action( 'init', 'create_block_guten_blocks_block_init' );


function ubp_appofox( $attributes,$content ) {
    ob_start();
   echo $content;
    return ob_get_clean();
}


function ubp_post_grid( $attributes,$content ) {
    ob_start();
   echo $content;
    return ob_get_clean();
}



function ubp_usecontext( $attributes,$content,$block ) {
    ob_start();
// nameing conversion : '{namespace}-{blockname}-view-script'
//wp_enqueue_script('themehunk-product-slider-one-view-script');
    //https://www.youtube.com/watch?v=iBAYVvdZD74
// echo get_block_wrapper_attributes($attributes);
// echo $content;
//     print_r($block );
// print_r($block->context['themehunk/recordId']);
//return $block->context['themehunk/recordId'];
   // return "<div woo-p ='".wp_json_encode($attributes)."' class='wpp-app' id='app'></div>";

   echo $content;
    return ob_get_clean();
}


function ubp_grid_product( $attributes,$content,$blocks ) {
    ob_start();
// nameing conversion : '{namespace}-{blockname}-view-script'
//wp_enqueue_script('themehunk-product-slider-one-view-script');
    //https://www.youtube.com/watch?v=iBAYVvdZD74
//echo get_block_wrapper_attributes($attributes);


    return "<div woo-p ='".wp_json_encode($attributes)."' class='wpp-app' id='app'></div>";
    return ob_get_clean();
}

function ubp_slider_product( $attributes,$content,$blocks ) {
    ob_start();
// nameing conversion : '{namespace}-{blockname}-view-script'
//wp_enqueue_script('themehunk-product-slider-one-view-script');
    //https://www.youtube.com/watch?v=iBAYVvdZD74
//echo get_block_wrapper_attributes($attributes);


    return "<div ubp-slider ='".wp_json_encode($attributes)."' class='ubp-slider' id='ubp-slider'></div>";

    return ob_get_clean();
}

// function myguten_enqueue() {
//     wp_enqueue_script(
//         'myguten-script',
//         get_template_directory_uri() . '/myguten.js'
//     );
// }
// add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );


// function myguten_stylesheet() {
//     wp_enqueue_style( 'myguten-style', plugins_url( 'style.css', __FILE__ ) );
// }
// add_action( 'enqueue_block_assets', 'myguten_stylesheet' );


add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2/', 'guten-blocks', array(
        'methods' => 'POST',
        'callback' => 'blockline_content_ai_callback',
		
    ) );
} );

function blockline_content_ai_callback(WP_REST_Request $request){



 // You can access parameters via direct array access on the object:
 $param = $request['aicontent'];

 // Or via the helper method:
 $param = $request->get_param( 'aicontent' );

 // You can get the combined, merged set of parameters:
 //$parameters = $request->get_params();

//  // The individual sets of parameters are also available, if needed:
//  $parameters = $request->get_url_params();
//  $parameters = $request->get_query_params();
//  $parameters = $request->get_body_params();
//  $parameters = $request->get_json_params();
//  $parameters = $request->get_default_params();

//  // Uploads aren't merged in, but can be accessed separately:
//  $parameters = $request->get_file_params();


$parameters['ai_generated']= open_ai_block($param);

	//print_r($_REQUEST);
$arr = array('therme'=>'blur',
 		'color'=>'red');
 	echo json_encode($parameters);
}



function open_ai_block($text){

   // if(isset($_POST['aidata']) && !empty($_POST['aidata'])){
    define('OPENAI_API_KEY','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');
    $message = $text;
    // Generated by curl-to-PHP: http://incarnate.github.io/curl-to-php/
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, 'https://api.openai.com/v1/chat/completions');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "{\n     \"model\": \"gpt-3.5-turbo\",\n     \"messages\": [{\"role\": \"user\", \"content\": \"$message\"}],\n     \"temperature\": 1\n   }");

    $headers = array();
    $headers[] = 'Content-Type: application/json';
    $headers[] = 'Authorization: Bearer '.OPENAI_API_KEY;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $result = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'Error:' . curl_error($ch);
    }
    curl_close($ch);

$openai_data = json_decode($result);

// echo "<pre>";
// print_r($openai_data);
// echo "</pre>";
return $openai_data->choices[0]->message->content;
// echo 'prompt_tokens = '. $openai_data->usage->prompt_tokens.'<br>';
// echo 'completion_tokens = '. $openai_data->usage->completion_tokens.'<br>';
// echo 'total_tokens = '. $openai_data->usage->total_tokens.'<br>';
// }

}

// register_rest_route( 'wp/v2/', 'guten-blocks', array(
//     'methods' => 'POST',
//     'callback' => 'blockline_content_ai_callback',
    
// ) );


       // product-api.php 

    add_action( 'rest_api_init', function () {
        register_rest_route( 'wc/v1', 'guten-blocks', array(
            'methods' => 'GET',
            'callback' => 'gutn_block_product_api_result',
            'permission_callback' => '__return_true',
        ) );
    } );


    function gutn_block_product_api_result(WP_REST_Request $request){

        $param = $request['aicontent'];

        if (!class_exists('WooCommerce')) {
           
        }
        $woo_api = array(
                'base_url' => site_url(),
                'productCount'  => array_sum( (array) wp_count_posts( 'product' ) ),

                'restApiRoutes' => [
                    'woo/v1' => array_keys(theme_deomain( 'wc/store/v1' ) ),
                ]

            );

       echo  json_encode($woo_api);

    }


    function theme_deomain($namespace){

        $rest_server     = rest_get_server();

		$namespace_index = $rest_server->get_namespace_index(
			[
				'namespace' => $namespace,
				'context'   => 'view',
			]
		);

		if ( is_wp_error( $namespace_index ) ) {
			return [];
		}

		$response_data = $namespace_index->get_data();

    	return $response_data['routes'] ?? [];
    }



function appofox_shortcode($atts) {
    $pull_quote_atts = shortcode_atts(array(
        'id' => 'My Quote',
        'title' => 'Author',
            ), $atts);
    $output = wp_kses_post($pull_quote_atts['id']);


            $iframe = '<iframe class="af-ifarme" src="https://appofox.com/booking/view/slotf/Nw" title="description"></iframe>';
    return $iframe;
}
add_shortcode('appofox', 'appofox_shortcode');



