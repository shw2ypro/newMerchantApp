
setMerchantHeader = function(){
	//$info.user_type
	if($info = getMerchantInfo()){		
		current_page = document.querySelector('ons-navigator').topPage.id;		
		html='';
		html+='<ons-row>';
		  html+='<ons-col vertical-align="top" width="25%" class="to_left">';
		    html+='<img src="images/logo-colorful@2x.png" class="logo">';
		  html+='</ons-col>';
		  html+='<ons-col vertical-align="top" class="to_center">';
		    html+='<h3>'+ $info.restaurant_name +'</h3>';
		    html+='<div class="rounded_tag">'+ t("merchant") +'</div>';
		  html+='</ons-col>';
		  html+='<ons-col vertical-align="top" width="25%" class="to_right" >';
		  
		   html+='<div class="avatar_wrap"><div class="inner">';
		   if (!empty($info.merchant_photo)){
		   	   html+='<img src="'+  $info.merchant_photo +'">';
		   } else {
		   	   html+='<img src="images/chef.svg">'; 
		   }
		   html+='</div></div>';
		   
		  html+='</ons-col>';
		html+='</ons-row>';
		$("#"+current_page +  " .top_sections").html( html );
	}
};

setDashboardMenu = function(data){
	html=''; col='';	
	x=1; xx=1;
	
	$total_row = data.length;
	
	$.each( data  , function( key, val ) {		
		col+='<ons-col vertical-align="top" width="25%" class="to_center" >';
		     col+='<ons-button modifier="quiet medium_icon" onclick="showPage('+ q(val.page) +');">';
		        col+='<img  src="images/home-icon/'+ val.icon+'">';
		        //col+='<div class="small_circle"><ons-icon icon="md-alert-triangle"></ons-icon></div>';
		        col+='<h3>'+ val.label + '</h3>';
		      col+='</ons-button>';
	     col+='</ons-col>';		
	     	     
	     if(x==4){
	     	 x=0;
		     html+='<ons-row >';
		     html+=col;
		     html+='</ons-row >';
		     $("#dashboard .menu").append( html );
		     html =''; col='';
	     } else {
	     	if(xx>=$total_row){
	     		html+='<ons-row >';
			    html+=col;
			    html+='</ons-row >';
			    $("#dashboard .menu").append( html );
			    html =''; col='';
	     	}
	     }	     
	     x++;xx++;
	});		
};

setFormFields = function(fields){			
	html='';
	$.each( fields  , function( key, val ) {
		
		attributes=''; attributes2='';
		if( !empty(val.readonly)){
			attributes+=' readonly ';
		}
		if( !empty(val.required)){
			attributes+=' required ';
		}
		if( !empty(val.onclick)){
			attributes+=' onclick="'+ val.onclick+ '" ';
		}			
		if( !empty(val.onclick2)){
			attributes2+=' onclick="'+ val.onclick2+ '" ';
		}			
		if( !empty(val.value)){
			attributes+=' value="'+ val.value+ '" ';
		}			
		if( !empty(val.class_name)){
			attributes+=' class="'+ val.class_name+ '" ';
		}			
		if( !empty(val.maxlength)){
			attributes+=' maxlength="'+ val.maxlength+ '" ';			
		}			
		if( !empty(val.max)){
			attributes+=' max="'+ val.max+ '" ';
		}			
			
		switch(val.type)
		{
			case "text":			
			
			html+='<div class="field_label">';
			   html+='<ons-input type="text" name="'+ val.field_name +'" id="'+ val.field_name +'" class="'+ val.field_name +'" modifier="material underbar"	 ';
			    html+='placeholder="'+ t(val.label) +'" '+ attributes +'  float></ons-input>';
			html+='</div>';
			break;
			
			case "text2":						
			html+='<div class="field_label">';
			   html+='<ons-input type="text" name="'+ val.field_name +'" id="'+ val.field_name +'" class="'+ val.class_name +'" modifier="material underbar"	 ';
			    html+='placeholder="'+ t(val.label) +'" '+ attributes +'  float></ons-input>';
			html+='</div>';
			break;
			
			case "password":
			html+='<div class="field_label field_with_icon">';
			   html+='<ons-input type="password" name="'+ val.field_name +'" id="'+ val.field_name +'"  modifier="material underbar"	 ';
			    html+='placeholder="'+ t(val.label) +'" '+ attributes +'  float></ons-input>';
			    
			    html+='<ons-button modifier="quiet" onclick="changePassField( $(this) );" >';
	              html+='<ons-icon icon="md-eye"></ons-icon>';
	            html+='</ons-button>';
			    
			html+='</div>';
			break;
			
			case "number":
			html+='<div class="field_label">';
			   html+='<ons-input type="number" name="'+ val.field_name +'" id="'+ val.field_name +'" class=" '+ val.field_name +'" modifier="material underbar"	 ';
			    html+='placeholder="'+ t(val.label) +'" '+ attributes +'  float></ons-input>';
			html+='</div>';
			break;
			
			case "hidden":
			 html+='<input type="hidden" name="'+ val.field_name +'" class="'+ val.field_name +'" '+ attributes +' >';
			break;
			
			case "hidden2":
			 html+='<input type="hidden" name="'+ val.field_name +'" '+ attributes +' >';
			break;
			
			case "checkbox":
			
			$is_checked='';
			if( !empty(val.checked)){
				if(val.checked){
					$is_checked='checked';
				}
			}				
					
			 html+='<div class="field_label">';
			 
				html+='<label class="checkbox checkbox--material">';
				html+='<input  name="'+ val.field_name +'" type="checkbox"  value="'+ val.value +'" class="checkbox__input checkbox--material__input '+ val.field_name +'"  '+ $is_checked+ '>';
				html+='<div class="checkbox__checkmark checkbox--material__checkmark"></div>';
				html+=  '<span class="kcheckbox_label" >' +  t(val.label) + '</span>';
				html+='</label>';
			 
			 html+='</div>';
			break;
			
			
			case "checkbox2":
			
			$is_checked='';
			if( !empty(val.checked)){
				if(val.checked){
					$is_checked='checked';
				}
			}				
					
			 html+='<div class="field_label">';
			 
				html+='<label class="checkbox checkbox--material">';
				html+='<input  name="'+ val.field_name +'" type="checkbox"  value="'+ val.value +'" class="checkbox__input checkbox--material__input '+ val.class_name +'"  '+ $is_checked+ '>';
				html+='<div class="checkbox__checkmark checkbox--material__checkmark"></div>';
				html+=  '<span class="kcheckbox_label" >' +  t(val.label) + '</span>';
				html+='</label>';
			 
			 html+='</div>';
			break;
			
			
			case "radio":
			
			$is_checked='';
			if( !empty(val.checked)){
				if(val.checked){
					$is_checked='checked';
				}
			}		
			
			 html+='<div class="field_label">';
			 
				html+='<label class="radio-button radio-button--material">';
				  html+='<input type="radio" class="radio-button__input radio-button--material__input '+ val.field_name +' "  name="'+ val.field_name +'" value="'+ val.value +'" '+ $is_checked+ ' >';
				  html+='<div class="radio-button__checkmark radio-button--material__checkmark"></div>';
				  html+=  '<span class="kcheckbox_label" >' +  t(val.label) + '</span>';
				html+='</label>';
			 
			 html+='</div>';
			break;
			
			case "h3":
			  html+='<h3>'+ t(val.label) +'</h3>';
			break;
			
			case "h4":
			  html+='<h4>'+ t(val.label) +'</h4>';
			break;
			
			case "select":			
			
			  selected = '';
			  if(!empty(val.selected)){
			  	 selected = val.selected;
			  }
			  			  
			  html+='<div class="field_label">';
			    html+='<ons-select  id="'+ val.field_name +'" name="'+ val.field_name +'"  class="'+ val.field_name +'"  >';			    
			    $.each( val.data  , function( key, val ) {			    	
			    	is_selected = "";
				    if(selected==key){
				    	is_selected = "selected";
				    }			    	
			    	html+='<option value="'+ key +'" '+ is_selected+' >'+ val +'</option>';
			    });
			    html+='</ons-select>';
			  html+='</div>';
			break;
			
			case "textarea":
			   value = '';
			   if(!empty(val.value)){
			   	  value=val.value;
			   }
			   
			   rows=4;
			   if(!empty(val.rows)){
			   	  rows=val.rows;
			   }
			   
			   html+='<div class="field_label">';
			   html+='<textarea  id="'+ val.field_name +'" name="'+ val.field_name +'" class="textarea textarea--transparent '+ val.field_name +'" rows="'+rows+'"';
			   html+=' placeholder="' +  t(val.label) + '">'+ value +'</textarea>';
			   html+='</div>';
			break;
			
			case "item_size":
			
			  selected = '';
			  if(!empty(val.selected)){
			  	 selected = val.selected;
			  }
			  			  
			   html+='<div class="field_label">';
			   html+='<ons-row>';
			          html+='<ons-col vertical-align="top" width="50%" >';
			          
			          html+='<ons-select  id="'+ val.field_name2 +'" name="'+ val.field_name2 +'"  class="'+ 'size' +'"  >';
					    $.each( val.size_data  , function( key, val ) {			    	
					    	is_selected = "";
						    if(selected==key){
						    	is_selected = "selected";
						    }			    	
					    	html+='<option value="'+ val.value +'" '+ is_selected+' >'+ val.name +'</option>';
					    });
					  html+='</ons-select>'; 
			          
			          html+='</ons-col>';
			          
			          html+='<ons-col vertical-align="top" width="50%" >';
			          html+='<ons-input type="number" name="'+ val.field_name +'" id="'+ val.field_name +'" class="price" modifier="material underbar"	 ';
			    html+='placeholder="'+ t(val.label) +'" '+ attributes +'  float></ons-input>';
			          html+='</ons-col>';
			          
			   html+='</ons-row>';
			   html+='</div>';
			   
			   html+='<div class="prices_list"></div>';
			   
			   html+='<div class="to_right">';
			   html+='<ons-button modifier="quiet material material--flat" onclick="priceNewRow()">';
			   html+='<span class="trn">'+ t("New row")+'</span>';
			   html+='</ons-button>';
			   html+='</div>';			   
	   
			break;
			
			case "hours":
			  html+='<div class="field_label">';
			  html+='<ons-row>';
			    html+='<ons-col vertical-align="top" width="50%" >';
			    html+='<ons-input type="text" name="'+ val.field_name +'" id="'+ val.id +'" class="'+val.class_name+'" modifier="material underbar" ';
			    html+='placeholder="'+ t(val.label) +'" '+ attributes +'  float></ons-input>';
			    html+='</ons-col>';
			    
			    html+='<ons-col vertical-align="top" width="50%" >';			    
			    html+='<ons-input type="text" name="'+ val.field_name2 +'" id="'+ val.id2 +'" class="'+val.class_name2+'" modifier="material underbar"	 ';
			    html+='placeholder="'+ t(val.label2) +'" '+ attributes2 +'  float></ons-input>';
			    html+='</ons-col>';
			    
			  html+='</ons-row>';
			  html+='</div>';	
			  
			break;
					
			case "upload_image":
			   $thumbnail = '';
			   if (!empty(val.thumbnail)){
			   	  $thumbnail = '<img src="'+ val.thumbnail +'" />';
			   }
			   html+='<div class="field_label greyed nopad">';
			     html+='<ons-row>';
			        html+='<ons-col vertical-align="center" class="to_center" width="25%" >';
			        html+='<div class="avatar_wrap auto"><div class="inner">'+ $thumbnail+'</div></div>';
			        html+='</ons-col>';
			        
			        html+='<ons-col vertical-align="center" width="75%" >';
			        
			        html+='<ons-button modifier="quiet material material--flat upload_botton" onclick="browseGallery()" >';
			           html+='<ons-row>';
			          html+='<ons-col vertical-align="center" class="to_center" width="30%" >';
				         html+='<ons-icon icon="md-image-o"></ons-icon>';
				       html+='</ons-col>';
				       
				       html+='<ons-col vertical-align="center" width="70%" >';
				       html+= t(val.label);
				       html+='</ons-col>';
				       html+='</ons-row>';
				       
				    html+='</ons-button>';
			        
			        html+='</ons-col>';
			        
			     html+='</ons-row>';
			   html+='</div>';	
			   			   
			   html+='<input type="hidden" name="upload_option_name"  class="upload_option_name" value="'+ val.upload_option_name +'">';
			   html+='<input type="hidden" name="upload_next_action" class="upload_next_action" value="'+ val.upload_next_action +'">';
			   html+='<input type="hidden" name="upload_type" class="upload_type" value="'+ val.upload_type +'">';
			   
			   if (!empty(val.value)){
			   	   html+='<input type="hidden" name="'+ val.upload_option_name +'" value="'+ val.value +'" class="added_photo" >';			   	  
			   }
			   
			break;
			
		}
	});	
	current_page = document.querySelector('ons-navigator').topPage.id;
	$("#"+current_page +  " form").append( html );
};

setSelectedList = function(data, seleted_data ){
	current_page_id = getCurrentPage(); html ='';	var row='';	
	var object = $("#"+ current_page_id + " ons-list" );
	var list = object[0];	
	    	
	$.each( data  , function( data, val ) {		
		
		checked='';		
		found = $.inArray( val.id , seleted_data );
		if(found>=0){
			checked=' checked ';
		}
					
		html+='<ons-list-item tappable modifier="material">';
	      html+='<label class="left">';
	        html+='<ons-checkbox name="cuisine" input-id="check-'+ val.id +'" value="'+ val.id +'" '+ checked +' modifier="material"></ons-checkbox>';
	      html+='</label>';
	      html+='<label for="check-'+ val.id +'" class="center">';
	        html+= val.name;
	      html+='</label>';
	    html+='</ons-list-item>';	   
	   row = ons.createElement(html);
	   list.appendChild(row);
	   html=''; 
	});
};

setSelectedSingleList = function(data, seleted_data ){
	current_page_id = getCurrentPage(); html ='';	var row='';	
	var object = $("#"+ current_page_id + " ons-list" );
	var list = object[0];	
	    	
	$.each( data  , function( data, val ) {		
		
		checked='';		
		found = $.inArray( val.value , seleted_data );
		if(found>=0){
			checked=' checked ';
		}
					
		html+='<ons-list-item tappable modifier="material">';
				html+='<label class="radio-button radio-button--material">';
				  html+='<input type="radio" class="radio-button__input radio-button--material__input '+ val.id +' "  name="'+ val.id +'" value="'+ val.value +'" >';
				  html+='<div class="radio-button__checkmark radio-button--material__checkmark"></div>';
				  html+=  '<span class="kcheckbox_label" >' +  t(val.name) + '</span>';
				html+='</label>';
	   html+='</ons-list-item>';	  			
			 
	   row = ons.createElement(html);
	   list.appendChild(row);
	   html=''; 
	});
};

setListColumn = function(data){
	current_page_id = getCurrentPage(); html ='';	var row='';	
	var object = $("#"+ current_page_id + " ons-list" );
	var list = object[0];	
	
	$total = data.length; col='';
	
	x=1; xx=1;
	
	$.each( data  , function( data, val ) {			

		   odd='odd';
		   if ( x % 2){
		   	  odd ='';
		   }
		
		   col+='<ons-col vertical-align="top" width="47%" >';
		     col+='<ons-list-item tappable onclick="editDelete('+ val.id +');" >';
		       col+='<h4 class="rounded_tag '+ odd +'">'+ val.name +'</h4>';
		       col+='<div class="list_image"><img src="'+ val.thumbnail +'"></div>';
		       col+='<p class="block-with-text">'+ val.description +'</p>';		 
		       
		       if(!empty(val.price)){
		       	  col+='<h4>'+ t("Price") +'</h4>';
		       	  col+='<p>'+ val.price +'</p>';		 
		       }
		       		       
		       if(!empty(val.prices)){
		       	  col+='<h4>'+ t("Price") +'</h4>';		       	  
		       	  dump(val.prices);
		       	  $.each( val.prices  , function( prices_key, prices_val ) {		       	  	
		       	     col+='<p>'+ prices_val +'</p>';		 
		       	  });		       	  
		       }
		       if(!empty(val.status)){
		       	  col+='<h4>'+ t("Date/Status") +'</h4>';
		       	  col+='<p>'+ val.status +'</p>';		 
		       	  col+='<p>'+ val.date_created +'</p>';		 
		       }
		       
		       if(!empty(val.schedule)){
		       	   $.each( val.schedule  , function( schedule_key, schedule_val ) {
		       	   	   schedule_class='';
		       	   	   if(schedule_val==1){
		       	   	   	   schedule_class='selected';
		       	   	   }
		       	   	   col+='<p><ons-icon icon="md-check" class="'+schedule_class+'"></ons-icon> ' + t(schedule_key) +'</p>';		 
		       	   });
		       }
		       
		     col+='</ons-list-item>';
		   col+='</ons-col>';
		   col+='<ons-col vertical-align="top" width="5%" ></ons-col>';
		   
		   
		if(x==2){
			x=0; 
			html+='<ons-row>';   
			html+=col;			
			html+='</ons-row>';		
			col='';
							
			row = ons.createElement(html);
		    list.appendChild(row);
		    html=''; 
		} else {
			if(xx>=$total){
				html+='<ons-row>';   
				html+=col;			
				html+='</ons-row>';		
				col='';
				row = ons.createElement(html);
		        list.appendChild(row);
		        html=''; 
			}
		}
		
		x++;
		xx++;	    
	   
	});		
	
};



setPaymentList = function(data ){
	current_page_id = getCurrentPage(); html ='';	var row='';	
	var object = $("#"+ current_page_id + " ons-list" );
	var list = object[0];	
	    	
	$.each( data  , function( key, val ) {				
				
		html+='<ons-list-item tappable onclick="processAjax('+ q("getPaymentInfo") +','+  q("code="+ key) +'  )" >';
	       html+='<div class="left">';
		     html+='<img class="list-item__thumbnail" src="'+ val.icon +'">';
		   html+='</div>';
	       html+='<div class="center">';
		    html+='<span class="list-item__title">'+ val.name +'</span>';
		    html+='<span class="list-item__subtitle"></span>';
		  html+='</div>';
	    html+='</ons-list-item>';
			 
	   row = ons.createElement(html);
	   list.appendChild(row);
	   html=''; 
	});
};


fillPaymentForm = function(payment_code, data){
	switch(payment_code){
		case "cod":
		      $merchant_disabled_cod =  0; $cod_change_required_merchant = 0;
    	 	  if (data.merchant_disabled_cod=="yes"){
    	 	  	  $merchant_disabled_cod=1;
    	 	  }
    	 	  if (data.cod_change_required_merchant==2){
    	 	  	  $cod_change_required_merchant=1;
    	 	  }
    	 	  fields = [
	    	 	  {'field_name':"merchant_disabled_cod", "label": "Disabled Cash On delivery", 
	    	 	  "type":"checkbox","value": "yes", "checked":$merchant_disabled_cod},	    	 	  
	    	 	  {'field_name':"cod_change_required_merchant", "label": "Change is required", 
	    	 	  "type":"checkbox","value": 2, "checked":$cod_change_required_merchant},	    	 	  
	    	 	  {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },
    	 	  ];
    	 	setFormFields(fields); 
		break;
		
		case "ocr":
		  $merchant_disabled_ccr = 0;
		  if (data.merchant_disabled_ccr=="yes"){
	 	  	  $merchant_disabled_ccr=1;
	 	  }
		  fields = [
	    	 	  {'field_name':"merchant_disabled_ccr", "label": "Disabled Offline Credit Card Payment", 
	    	 	  "type":"checkbox","value": "yes", "checked":$merchant_disabled_ccr},	    	 	  	    	 	  
	    	 	  {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },
    	  	  ];
    	  setFormFields(fields); 
		break;
		
		case "pyr":
		  $merchant_payondeliver_enabled = 0;
		  if (data.merchant_payondeliver_enabled=="yes"){
	 	  	  $merchant_payondeliver_enabled=1;
	 	  }
		  fields = [
	    	 	  {'field_name':"merchant_payondeliver_enabled", "label": "Enabled", 
	    	 	  "type":"checkbox","value": "yes", "checked":$merchant_payondeliver_enabled},	    	 
	    	 	  {'field_name':"", "label": "Cards", "type":"h3"},	  	    	 	  
	    	 	  {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },
    	  ];
    	  
    	  if(data.card_list.length>0){
    	  	 $.each( data.card_list  , function( card_key, card_val ) {    	  	 	
    	  	 	$checked = 0; seleted_data = data.card_selected;    	  	 	    	  	 	
    	  	 	found = $.inArray( card_val.id , seleted_data );
				if(found>=0){
					$checked=1;
				}
    	  	 	new_fields = {'field_name':"payment_provider[]", "label": card_val.payment_name, 
		  	 	 "type":"checkbox","value": card_val.id , "checked": $checked};
		  	 	 fields.push(new_fields);
    	  	 });
    	  }
    	  
    	  setFormFields(fields); 
		break;
		
		case "stp":
		   $stripe_enabled = 0; $stripe_mode_sandbox=''; $stripe_mode_live=''; $fee = 0;
		   $sanbox_stripe_secret_key=''; $sandbox_stripe_pub_key=''; $merchant_sandbox_stripe_webhooks='';
		   $live_stripe_secret_key=''; $live_stripe_pub_key=''; $merchant_live_stripe_webhooks='';
		   
		   if (data.stripe_enabled=="yes"){
	 	  	   $stripe_enabled=1;
	 	   }
	 	   if(data.stripe_mode=="Sandbox"){
	 	   	  $stripe_mode_sandbox = 1;
	 	   }
	 	   if(data.stripe_mode=="live"){
	 	   	  $stripe_mode_live = 1;
	 	   }
		   
		   fields = [
	    	 	  {'field_name':"stripe_enabled", "label": "Enabled", "type":"checkbox","value": "yes","checked":$stripe_enabled},	    	 	    
	    	 	  {'field_name':"stripe_mode", "label": "Sandbox", "type":"radio","value": "Sandbox","checked":$stripe_mode_sandbox},
	    	 	  {'field_name':"stripe_mode", "label": "Live", "type":"radio","value": "live","checked":$stripe_mode_live},    	 	  
	    	 	  
	    	 	  {'field_name':"merchant_stripe_card_fee", "label": "Card Fee", 
	    	 	  "type":"number","value": data.merchant_stripe_card_fee},	    	 	  
	    	 	  
	    	 	  {'field_name':"", "label": "Sandbox Credentials", "type":"h3"},
	    	 	  {'field_name':"sanbox_stripe_secret_key", "label": "Test Secret key", 
	    	 	  "type":"text","value": data.sanbox_stripe_secret_key},
	    	 	  
	    	 	  {'field_name':"sandbox_stripe_pub_key", "label": "Test Publishable Key", 
	    	 	  "type":"text","value": data.sandbox_stripe_pub_key},
	    	 	  
	    	 	  {'field_name':"merchant_sandbox_stripe_webhooks", "label": "Webhooks Signing secret", 
	    	 	  "type":"text","value": data.merchant_sandbox_stripe_webhooks},
	    	 	  
	    	 	  {'field_name':"", "label": "live Credentials", "type":"h3"},
	    	 	  {'field_name':"live_stripe_secret_key", "label": "Live Secret key", 
	    	 	  "type":"text","value": data.live_stripe_secret_key},
	    	 	  {'field_name':"live_stripe_pub_key", "label": "Live Publishable Key", 
	    	 	  "type":"text","value": data.live_stripe_pub_key},
	    	 	  {'field_name':"merchant_live_stripe_webhooks", "label": "Webhooks Signing secret", 
	    	 	  "type":"text","value": data.merchant_live_stripe_webhooks},
	    	 	  	    	 	 
	    	 	  {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },
    	  ];
    	  setFormFields(fields); 
		break;
		
		case "payu":
		   $enabled=''; $mode_sandbox=''; $mode_live='';
		   if (data.merchant_payu_enabled=="yes"){
		   	  $enabled=1;
		   }
		   if(data.merchant_payu_mode=="Sandbox"){
	 	   	  $mode_sandbox = 1;
	 	   }
	 	   if(data.merchant_payu_mode=="live"){
	 	   	  $mode_live = 1;
	 	   }
		   fields = [
	    	 	  {'field_name':"merchant_payu_enabled", "label": "Enabled", "type":"checkbox","value": "yes","checked":$enabled},
	    	 	  {'field_name':"merchant_payu_mode", "label": "Sandbox", "type":"radio","value": "Sandbox","checked":$mode_sandbox},
	    	 	  {'field_name':"merchant_payu_mode", "label": "Live", "type":"radio","value": "live","checked":$mode_live},    	 	
	    	 	  
	    	 	  {'field_name':"merchant_payu_key", "label": "Merchant Key", 
	    	 	  "type":"text","value": data.merchant_payu_key},
	    	 	  
	    	 	  {'field_name':"merchant_payu_salt", "label": "SALT", 
	    	 	  "type":"text","value": data.merchant_payu_salt},
	    	 	  
	    	 	  {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  
	       ];
		   setFormFields(fields); 
		break;
		
		case "obd":
		   $enabled=''; 
		   if (data.merchant_bankdeposit_enabled=="yes"){
		   	  $enabled=1;
		   }
		   fields = [
	    	 {'field_name':"merchant_bankdeposit_enabled", "label": "Enabled", "type":"checkbox","value": "yes","checked":$enabled},
	    	 {'field_name':"merchant_deposit_subject", "label": "Subject", 
	    	 	  "type":"text","value": data.merchant_deposit_subject},
	    	 {'field_name':"merchant_deposit_instructions", "label": "Bank Deposit instructions", 
	    	 "type":"textarea", "value" : data.merchant_deposit_instructions ,'rows':10}, 
	    	 {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  	  
	       ]; 
		   setFormFields(fields); 
		break;
		
		case "paypal_v2":
		   $enabled='';  $mode_sandbox=''; $mode_live='';
		   if (data.merchant_paypal_v2_enabled==1){
		   	  $enabled=1;
		   }
		   if(data.merchant_paypal_v2_mode=="sandbox"){
	 	   	  $mode_sandbox = 1;
	 	   }
	 	   if(data.merchant_paypal_v2_mode=="live"){
	 	   	  $mode_live = 1;
	 	   }
		   fields = [
	    	 {'field_name':"merchant_paypal_v2_enabled", "label": "Enabled", "type":"checkbox","value": 1,"checked":$enabled},
	    	 {'field_name':"merchant_paypal_v2_mode", "label": "Sandbox", "type":"radio","value": "sandbox","checked":$mode_sandbox},
	    	 {'field_name':"merchant_paypal_v2_mode", "label": "Live", "type":"radio","value": "live","checked":$mode_live},   
	    	 {'field_name':"merchant_paypal_v2_card_fee", "label": "Card fee", 
	    	 	  "type":"number","value": data.merchant_paypal_v2_card_fee}, 	 	
	    	 	  
	    	{'field_name':"merchant_paypal_v2_client_id", "label": "Client ID", 
	    	 	  "type":"text","value": data.merchant_paypal_v2_client_id}, 	 	
	    	 	  
	    	{'field_name':"merchant_paypal_v2_secret", "label": "Secret", 
	    	 	  "type":"text","value": data.merchant_paypal_v2_secret}, 	 	 	  
	    	 	   	  
	    	 {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  	  
	       ]; 
		   setFormFields(fields); 
		break;
		
		case "mercadopago":
		   $enabled='';  $mode_sandbox=''; $mode_live='';
		   if (data.merchant_mercadopago_v2_enabled==1){
		   	  $enabled=1;
		   }
		   if(data.merchant_mercadopago_v2_mode=="sandbox"){
	 	   	  $mode_sandbox = 1;
	 	   }
	 	   if(data.merchant_mercadopago_v2_mode=="live"){
	 	   	  $mode_live = 1;
	 	   }
		   fields = [
	    	 {'field_name':"merchant_mercadopago_v2_enabled", "label": "Enabled", "type":"checkbox","value": 1,"checked":$enabled},
	    	 {'field_name':"merchant_mercadopago_v2_mode", "label": "Sandbox", "type":"radio","value": "sandbox","checked":$mode_sandbox},
	    	 {'field_name':"merchant_mercadopago_v2_mode", "label": "Live", "type":"radio","value": "live","checked":$mode_live},   
	    	 {'field_name':"merchant_mercadopago_v2_card_fee", "label": "Card fee", 
	    	 	  "type":"number","value": data.merchant_mercadopago_v2_card_fee}, 	 	
	    	 	  
	    	{'field_name':"merchant_mercadopago_v2_client_id", "label": "Client ID", 
	    	 	  "type":"text","value": data.merchant_mercadopago_v2_client_id}, 	 	
	    	 	  
	    	{'field_name':"merchant_mercadopago_v2_client_secret", "label": "Secret", 
	    	 	  "type":"text","value": data.merchant_mercadopago_v2_client_secret}, 	 	 	  
	    	 	   	  
	    	 {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  	  
	       ]; 
		   setFormFields(fields); 
		break;
		
		case "atz":
		   $enabled='';  $mode_sandbox=''; $mode_live='';
		   if (data.merchant_enabled_autho=="yes"){
		   	  $enabled=1;
		   }
		   if(data.merchant_mode_autho=="sandbox"){
	 	   	  $mode_sandbox = 1;
	 	   }
	 	   if(data.merchant_mode_autho=="live"){
	 	   	  $mode_live = 1;
	 	   }
		   fields = [
	    	 {'field_name':"merchant_enabled_autho", "label": "Enabled", "type":"checkbox","value": "yes","checked":$enabled},
	    	 {'field_name':"merchant_mode_autho", "label": "Sandbox", "type":"radio","value": "sandbox","checked":$mode_sandbox},
	    	 {'field_name':"merchant_mode_autho", "label": "Live", "type":"radio","value": "live","checked":$mode_live},   
	    	 	  
	    	 {'field_name':"", "label": "Credentials", "type":"h3"},	  	    	 	  
	    	 
	    	{'field_name':"merchant_autho_api_id", "label": "API Login ID", 
	    	 	  "type":"text","value": data.merchant_autho_api_id}, 	 	
	    	 	  
	    	{'field_name':"merchant_autho_key", "label": "Transaction Key", 
	    	 	  "type":"text","value": data.merchant_autho_key}, 	 	 	  
	    	 	   	  
	    	 {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  	  
	       ]; 
		   setFormFields(fields); 
		break;
		
		case "btr":
		 $enabled='';  $mode_sandbox=''; $mode_live='';
		   if (data.merchant_btr_enabled=="2"){
		   	  $enabled=1;
		   }
		   if(data.merchant_btr_mode=="sandbox"){
	 	   	  $mode_sandbox = 1;
	 	   }
	 	   if(data.merchant_btr_mode=="live"){
	 	   	  $mode_live = 1;
	 	   }
		   fields = [
	    	 {'field_name':"merchant_btr_enabled", "label": "Enabled", "type":"checkbox","value": "2","checked":$enabled},
	    	 {'field_name':"merchant_btr_mode", "label": "Sandbox", "type":"radio","value": "sandbox","checked":$mode_sandbox},
	    	 {'field_name':"merchant_btr_mode", "label": "Live", "type":"radio","value": "live","checked":$mode_live},   
	    	 	  
	    	 {'field_name':"", "label": "Sandbox Credentials", "type":"h3"},	  	    	 	  
	    	 
	    	{'field_name':"mt_sanbox_brain_mtid", "label": "Merchant ID", 
	    	 	  "type":"text","value": data.mt_sanbox_brain_mtid}, 	 	
	    	 	  
	    	{'field_name':"mt_sanbox_brain_publickey", "label": "Public Key", 
	    	 	  "type":"text","value": data.mt_sanbox_brain_publickey}, 	 	 	  
	    	 	  
	    	 {'field_name':"mt_sanbox_brain_privateckey", "label": "Private Key", 
	    	 	  "type":"text","value": data.mt_sanbox_brain_privateckey}, 	 
	    	 	  
	    	 {'field_name':"", "label": "Sandbox Live", "type":"h3"},		  	 	  	  
	    	 {'field_name':"mt_live_brain_mtid", "label": "Merchant ID", 
	    	 	  "type":"text","value": data.mt_live_brain_mtid}, 	 
	    	 {'field_name':"mt_live_brain_publickey", "label": "Public Key", 
	    	 	  "type":"text","value": data.mt_live_brain_publickey}, 	 
	    	 {'field_name':"mt_live_brain_privateckey", "label": "Private Key", 
	    	 	  "type":"text","value": data.mt_live_brain_privateckey}, 	 	  	  
	    	 	   	  
	    	 {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  	  
	       ]; 
		   setFormFields(fields); 
		break;
		
		case "rzr":
		   $enabled='';  $mode_sandbox=''; $mode_live='';
		   if (data.merchant_rzr_enabled=="2"){
		   	  $enabled=1;
		   }
		   if(data.merchant_rzr_mode=="sandbox"){
	 	   	  $mode_sandbox = 1;
	 	   }
	 	   if(data.merchant_rzr_mode=="production"){
	 	   	  $mode_live = 1;
	 	   }
		   fields = [
	    	 {'field_name':"merchant_rzr_enabled", "label": "Enabled", "type":"checkbox","value": "2","checked":$enabled},
	    	 {'field_name':"merchant_rzr_mode", "label": "Sandbox", "type":"radio","value": "sandbox","checked":$mode_sandbox},
	    	 {'field_name':"merchant_rzr_mode", "label": "Live", "type":"radio","value": "production","checked":$mode_live},   
	    	 	  
	    	 {'field_name':"", "label": "Sandbox Credentials", "type":"h3"},	  	    	 	  
	    	 
	    	{'field_name':"merchant_razor_key_id_sanbox", "label": "Key ID", 
	    	 	  "type":"text","value": data.merchant_razor_key_id_sanbox}, 	 	
	    	 	  
	    	{'field_name':"merchant_razor_secret_key_sanbox", "label": "Key Secret", 
	    	 	  "type":"text","value": data.merchant_razor_secret_key_sanbox}, 	 	 	  
	    	 	  
	    	 {'field_name':"", "label": "Live Credentials", "type":"h3"},	
	    	 	  
	    	 {'field_name':"merchant_razor_key_id_live", "label": "Key ID", 
	    	 	  "type":"text","value": data.merchant_razor_key_id_live}, 	 	
	    	 	  
	    	{'field_name':"merchant_razor_secret_key_live", "label": "Key Secret", 
	    	 	  "type":"text","value": data.merchant_razor_secret_key_live}, 	 	 	  
	    	 	   	  
	    	 {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  	  
	       ]; 
		   setFormFields(fields); 
		break;
		
		case "vog":
		   $enabled=''; 
		   if (data.merchant_vog_enabled=="2"){
		   	  $enabled=1;
		   }
		  fields = [
	    	 {'field_name':"merchant_vog_enabled", "label": "Enabled", "type":"checkbox","value": "2","checked":$enabled},
	    	 {'field_name':"merchant_vog_merchant_id", "label": "Merchant ID", 
	    	 "type":"text","value": data.merchant_vog_merchant_id}, 	 	 	  
	    	 {'field_name':"payment_code", "label": "id", "type":"hidden", "value" : payment_code  },  	  
	      ];
		  setFormFields(fields); 
		break;
		
	}
};

setOrderList = function(page_id, data, $settings){	
	var html =''; var row='';	
	var object = $("#" + page_id + " ons-list" );
	var list = object[0];	
	
	setOrderCount(page_id,data.total);
	
	$incoming_status = ['pending','paid'];
	$outgoing_status = ['accepted','delayed'];
	$ready_status = ['ready for delivery','ready'];
	
	if(!empty($settings.options.order_incoming_status)){		
		$incoming_status = $settings.options.order_incoming_status;
	}		
	
	if(!empty($settings.options.order_outgoing_status)){		
		$outgoing_status = $settings.options.order_outgoing_status;
	}		
	
	if(!empty($settings.options.order_ready_status)){		
		$ready_status = $settings.options.order_ready_status;
	}		
			
	$order_failed = ['failed','decline','cancelled'];
	$order_success = ['successful','delivered','completed'];
		
	if(!empty($settings.options.order_failed_status)){		
		$order_failed = $settings.options.order_failed_status;
	}
	if(!empty($settings.options.order_successful_status)){		
		$order_success = $settings.options.order_successful_status;
	}	
		
	$.each( data.data  , function( data, val ) {
				
		/*trans_type_icon = 'basket-outline';
		if(val.trans_type_raw=="delivery"){
			trans_type_icon = 'car-outline';
		} else if( val.trans_type_raw=="dinein" ){
			trans_type_icon = 'restaurant-outline';
		}*/
		
		$show_action = false; $action_label_0 =''; $action_label_1 ='';
	    $do_action_0 = ''; $do_action_1 = '';
	    $do_action_2 = ''; $action_label_2 = '';
	    $do_action_3 = ''; $action_label_3 = '';
	    
	    $found_incoming = $.inArray( val.status_raw , $incoming_status );	    	    
	    $found_ougoing = $.inArray( val.status_raw , $outgoing_status );	    
	    $found_ready = $.inArray( val.status_raw , $ready_status );	    
	    
	    
	    $found_failed = $.inArray( val.status_raw , $order_failed );	  
	    $found_succesful = $.inArray( val.status_raw , $order_success );	  
	    
	    if( $found_incoming >=0){
	    	$show_action=true;
	    	$do_action_0 = 'accept'; $do_action_1 = 'decline';
	    	$action_label_0 = 'Accept'; $action_label_1 = 'Decline';	   
	    	 	
	    } else if ( $found_ougoing>=0){
	    	
	    	$show_action=true;
	    	$do_action_0 = 'food_is_done'; $do_action_1 = 'cancel_order';
	    	$action_label_0 = 'Food is done'; $action_label_1 = 'Cancel';	   
	    	
	    	$do_action_2 = 'delay_order'; $action_label_2 = 'Delay order';
	        $do_action_3 = 'manual_change_status'; $action_label_3 = 'Change status'; 
	    		
	    } else if ( $found_ready >=0 ){
	    	$show_action=true;
	    	$do_action_0 = 'complete_order'; $do_action_1 = '';
	    	$action_label_0 = 'Complete order'; $action_label_1 = '';	    	
	    }
	    
	    /*CHECK IF CANCEL ORDER*/	   
	    if(val.request_cancel==1){
	    	$do_action_2='';
	    	
	    	$show_action=true;
	    	$do_action_0 = 'approved_cancel_order'; $do_action_1 = 'decline_cancel_order';
	    	$action_label_0 = 'Approved'; $action_label_1 = 'Decline';	   
	    }
		
	    /*modifier="status_red"
	    modifier="status_green"
	    */
	    $list_modifier='';
	    if($found_failed>=0){
	    	$list_modifier='status_red';
	    } else if ( $found_succesful>=0){
	    	$list_modifier='status_green';
	    }
	    
	    html+='<ons-list-item tappable modifier="'+ $list_modifier +'" data-date_created_raw="'+ val.date_created_raw +'" data-timezone="'+  val.timezone+'" data-estimated_date_time="'+ val.estimated_date_time +'" data-estimated_time="'+ val.estimated_time +'" data-order_id="'+ val.order_id +'" data-date_modified="'+ val.date_modified +'" >';
	    html+='<ons-row onclick="order_action('+ q("order_details") + "," + q(val.order_id) + "," + q(val.trans_type_raw) +')"  >';
	      html+='<ons-col vertical-align="center" width="22%" class="to_center" > ';
	          html+='<div class="kcircle">';
	            html+='<div class="inner_kcirle">';	              	              	              
	              html+='<ons-icon icon="'+ getTransactionIcon(val.trans_type_raw) +'"></ons-icon>';
	            html+='</div>';
	          html+='</div>';
	      html+='</ons-col>';
	      html+='<ons-col vertical-align="top" class="to_left">';
		    html+='<p>'+ val.order_no+'</p>';
		    html+='<h4><span class="kcircle_small">'+ val.total_items +'</span>'+ val.items +'</h4>';		    
		    
		    if(val.status_raw !="pending"){
		      html+='<p class="order_status">'+ t(val.status) +'</p>';
		    }
		    if(val.pre_order==1){
		      html+='<p>'+ val.pre_order_msg +'</p>';
		    }
		    
		    html+='<p class="time_left"></p>';
		    
		  html+='</ons-col>';
		  
		  html+='<ons-col vertical-align="top" width="30%" class="to_right" >';		    
		    html+='<p><span class="created_time_stamp">'+ val.date_created +'</span> ';
		    html+='<ons-icon icon="md-time" class="ion_small" ></ons-icon></p>';
		    
		    html+='<h4>'+ val.total_order_amount +'</h4>';
		    if( val.estimated_time>0){
		    	
		    	
		       if(page_id=="ready_order"){		       	  		       	  		       
		       	  /*html+='<div class="circle_brown float_right">';			       	  
		       	  html+='<ons-icon icon="md-car"></ons-icon>';		       	  		       	  
		       	  html+='</div>';		       	  		       	  
		       	  html+='<p>Pickup in<br/><b>1 min</b></p>';*/
		       	  
		       	  html+='<div class="progress-circle progress-'+ val.estimated_time +'"><span class="new_estimation">'+ val.estimated_time +'</span></div>';
		       	  
		       } else {
			       html+='<div class="progress-circle progress-'+ val.estimated_time +'"><span class="new_estimation">'+ val.estimated_time +'</span></div>';
		       }
		       		       
		    }
		    		    
		  html+='</ons-col>';
		  
	    html+='</ons-row>';
	    
	    /*ACTION*/
	    	   
	    
	    if($show_action){
		    html+='<div class="actions_wrap">';
		      html+='<ons-row>';
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        
		          html+='<ons-button modifier="quiet action_button" onclick="order_action('+ q($do_action_0) + "," + q(val.order_id) + "," + q(val.trans_type_raw)  +')">';
		            html+='<div class="inner">';			        			        
			        html+='<ons-icon icon="md-check-circle"></ons-icon>';
			        html+='<span class="trn">'+ t($action_label_0) +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
			      
		        html+='</ons-col>';
		        
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        
		          if(!empty($do_action_1)){
		          html+='<ons-button modifier="quiet action_button button_decline" onclick="order_action('+ q($do_action_1) + "," + q(val.order_id) + "," + q(val.trans_type_raw)  +')" >';
		            html+='<div class="inner">';			        
			        html+='<ons-icon icon="md-close-circle"></ons-icon>';
			        html+='<span class="trn">'+ t($action_label_1) +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
		          }
		        
		        html+='</ons-col>';
		      html+='</ons-row>';
		    html+='</div>';
	    }
	    /*ACTION*/
	    	    
	    if(!empty($do_action_2)){
	    	 html+='<div class="actions_wrap">';
		      html+='<ons-row>';
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        
		          html+='<ons-button modifier="quiet action_button button_black" onclick="order_action('+ q($do_action_2) + "," + q(val.order_id) + "," + q(val.trans_type_raw)  +')">';
		            html+='<div class="inner">';			       
			        html+='<span class="trn">'+ t($action_label_2) +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
			      
		        html+='</ons-col>';
		        
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        
		          if(!empty($do_action_3)){
		          html+='<ons-button modifier="quiet action_button button_black" onclick="order_action('+ q($do_action_3) + "," + q(val.order_id) + "," + q(val.trans_type_raw)  +')" >';
		            html+='<div class="inner">';			        
			        html+='<span class="trn">'+ t($action_label_3) +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
		          }
		        
		        html+='</ons-col>';
		      html+='</ons-row>';
		    html+='</div>';
	    }
	    
	    
	    html+='</ons-list-item>';  
		
		 row = ons.createElement(html);
	     list.appendChild(row);
	     html=''; 
	});
			
};

setNoList = function(page_id, message , icon ){
	try {
		
		if(empty(icon)){
			icon='kuala.png';
		}
		
		html='';
		
		html+='<div class="no_list_wrap">';
		    html+='<img src="images/'+ icon +'" >';
		    html+='<p>'+ message +'</p>';
		html+='</div>';
		
		$("#"+ page_id +" .no_list").html(html);
			
	} catch(err) {
      dump(err.message);
    } 
};

clearNoList = function(page_id){
	$("#"+ page_id +" .no_list").html('');
};

setCarouselOptions = function(page_id , data, width){
	html='';	
	if(!empty(data)){		
		html+='<ons-carousel fullscreen swipeable auto-scroll overscrollable  item-width="'+width+'%" >';
		$.each( data  , function( key, val ) {			
			html+='<ons-carousel-item onclick="setReason('+q(page_id)+',$(this),'+ q(val.value) +')" >';
              html+='<p>'+ val.label +'</p> ';
            html+='</ons-carousel-item>';
		});
		html+='</ons-carousel>';
		$("#"+page_id + " .segment").html( html );
	}
};

clearCarouselOptions = function(page_id){
	$("#"+page_id + " .segment").html( '' );
};

setOrderCount = function(page_id, total){
	switch(page_id){
		case "todays_order":
		  $(".incoming_count").html( parseInt(total) );
		break;
		
		case "outgoing_order":
		  $(".outgoing_count").html( parseInt(total) );
		break;
		
		case "ready_order":
		  $(".ready_count").html( parseInt(total) );
		break;
	}
};

setOrderDetails = function(data, history_data){
	page_id = getCurrentPage();
	
	var object = $("#" + page_id + " ons-list" );
	var list = object[0];	
	
	$("#"+ page_id + " h3").html( t("Order No.") +" #"+ data.order_data.order_id );
	$("#"+ page_id + " .sub_title").html(  t(data.order_data.trans_type) );
	
	$trans_type_raw = data.order_data.trans_type_raw;
	
	html='';

	html+='<ons-list-item data-estimated_date_time="'+ data.order_data.estimated_date_time +'" data-timezone="'+ data.timezone +'" data-estimated_time="'+ data.order_data.estimated_time +'" >';
	 
	  html+='<ons-row>';
 	    html+='<ons-col vertical-align="center" width="25%" class="to_center" >';
 	       html+='<div class="kcircle">';
 	        html+='<div class="inner_kcirle">';
 	         html+='<ons-icon icon="'+ getTransactionIcon( data.order_data.trans_type_raw ) +'"></ons-icon>';
 	        html+='</div>';
 	       html+='</div>';
 	    html+='</ons-col>';
 	    html+='<ons-col vertical-align="top"  class="to_left" >';
 	    html+='<h4>'+ data.order_data.customer_name +'</h4>';
 	    html+='<p>'+ data.order_data.date_created +'</p>';
 	    html+='<p>'+ data.order_data.payment_type +'</p>';
 	    html+='</ons-col>';
 	    
 	    html+='<ons-col vertical-align="top" width="25%"  class="to_right" >';
 	     html+='<h4>'+ data.order_data.total +'</h4>';
 	     if ( data.order_data.estimated_time>0){
 	        html+='<div class="progress-circle progress-'+ data.order_data.estimated_time +'">';
 	        html+='<span class="new_estimation">'+ data.order_data.estimated_time +'</span></div>';
 	     }
 	    html+='</ons-col>';
 	   html+='</ons-row>';
 	    	   
 	   
 	   if(!empty(data.order_data.delivery_address) && $trans_type_raw=="delivery" ){ 	   	
 	   html+='<ons-row class="normal_line">';
	 	    html+='<ons-col vertical-align="top"  class="to_left" >';
	 	     html+='<p>'+  t("Delivery address") +'</p>';
	 	     html+='<p class="label">'+ data.order_data.delivery_address +'</p>';
	 	    html+='</ons-col>';
	 	    html+='<ons-col vertical-align="top" width="25%"  class="to_right" >';
	 	    
	 	       if(!empty(data.order_data.location_lng)){
	 	       html+='<ons-fab modifier="mini fabred" onclick="mapExternalDirection('+q(data.order_data.location_lat)+ "," + q(data.order_data.location_lng) +')">';
	            html+='<ons-icon icon="md-turning-sign"></ons-icon>';
	           html+='</ons-fab>';
	 	       }
	           
	 	    html+='</ons-col>'; 
 	   html+='</ons-row>';
 	   }
 	   
 	   if(!empty(data.order_data.contact_phone)){
 	   html+='<ons-row class="normal_line">';
	 	    html+='<ons-col vertical-align="top"  class="to_left" >';
	 	     html+='<p>'+ t("Contact number") +'</p>';
	 	     html+='<p class="label">'+ data.order_data.contact_phone +'</p>';
	 	    html+='</ons-col>';
	 	    html+='<ons-col vertical-align="top" width="25%"  class="to_right" >';
	 	       if(!empty(data.order_data.contact_phone)){
		 	       html+='<ons-fab modifier="mini fabred" onclick="externalPhoneCall('+ q(data.order_data.contact_phone) +')" >';
		            html+='<ons-icon icon="md-phone"></ons-icon>';
		           html+='</ons-fab>';
	 	       }
	 	    html+='</ons-col> '; 
 	   html+='</ons-row>';
 	   }
 	   
 	   $delivery_options=''; $order_change='';
 	   if( data.order_data.opt_contact_delivery>0){
 	   	  $delivery_options= data.order_data.opt_contact.value ;
 	   }
 	   if( data.order_data.order_change_raw>0){
 	   	  $order_change = data.order_data.order_change;
 	   }
 	   
 	   switch($trans_type_raw){
 	   	   case "pickup":
 	   	   html+=row_order_details( t("Pickup date"),  data.order_data.delivery_date ,
 	       t("Pickup time"), data.order_data.delivery_time );
 	       
 	       if(data.order_data.order_change_raw>0){
 	       	  html+=row_order_details( t("Order change"),  data.order_data.order_change ,
 	          '', ''  );  
 	       }
 	   	   break
 	   	   
 	   	   case "dinein":
 	   	   html+=row_order_details( t("Dine in Date"),  data.order_data.delivery_date ,
 	       t("Dine in Time"), data.order_data.delivery_time );
 	       
 	       html+=row_order_details( t("Number of guest"),  data.order_data.dinein_number_of_guest ,
 	       t("Table number"), data.order_data.dinein_table_number );  
 	       
 	       html+=row_order_details( t("Special instructions"),  data.order_data.dinein_special_instruction ,
 	       '', '' ,'notes','' );  
 	       
 	       if(data.order_data.order_change_raw>0){
 	       	  html+=row_order_details( t("Order change"),  data.order_data.order_change ,
 	          '', ''  );  
 	       }
 	   	   break
 	   	   
 	   	   default:
 	   	   html+=row_order_details( t("Delivery date"),  data.order_data.delivery_date ,
 	       t("Delivery time"), data.order_data.delivery_time );
 	       
 	       html+=row_order_details( t("Delivery Instruction"),  data.order_data.delivery_instruction ,
 	       t("Location Name"), data.order_data.location_name ,'notes');  
 	       
 	       html+=row_order_details( t("Order change"),  $order_change ,
 	       t("Delivery options"), $delivery_options ,'','notes');   
 	   	   break
 	   }
 	    	    	     	    	    	     	     	    	    	   
 	   
 	    html+='<ons-row></ons-row>';
 	    
 	    
 	   /*ITEM*/ 
 	   $order_details = data.order_details;
 	   
 	   if($order_details.length>0){
 	   	   $.each( $order_details  , function( key, $category ) {		
 	   	   	 	   	    
 	   	    html+=row_category($category.category_name);
 	   	   	
	 	    if($category.item.length>0){
	 	    	$.each( $category.item  , function( itemkey, $item ) {			 	    		
	 	    		$item_name = "<p>"+ $item.name +"</p>";
	 	    		if($item.discount>0){
	 	    			$item_name+= "<p><span class=\"line_tru\">"+ $item.price +"</span> <span>"+ $item.price_after_discount +"</span> </p>";
	 	    		} else {
	 	    			$item_name+= "<p>"+ $item.price +"</p>";
	 	    		}
	 	    		html+=row_item( $item.qty, $item_name , $item.item_total_price );
	 	    		
	 	    		if(!empty($item.order_notes)){
	 	    		html+=row_item( '', '<p class="notes">'+ $item.order_notes +'</p>' , '' );
	 	    		}
	 	    		
	 	    		/*SUB ITEM*/
	 	    		if($item.sub_item.length>0){
	 	    			$.each( $item.sub_item  , function( $sub_category_key, $sub_category ) {	 	    			
					 	    html+=row_category( $sub_category.addon_category );   					 	    
					 	    if($sub_category.item.length>0){
					 	    	$.each( $sub_category.item  , function( $sub_item_key, $sub_item ) {
					 	    		$sub_item_name = "<p>"+ $sub_item.price+ " " + $sub_item.name +"</p>";	
					 	    		html+=row_item( $sub_item.qty, $sub_item_name , $sub_item.sub_item_total );
					 	    	});
					 	    }					 	    
	 	    			});
	 	    		}
	 	    		/*END SUB*/
	 	    	
	 	    		//html+=row_item( '', '' , '', 'normal_line' );
	 	    			
		 	   }); 
	 	    }	 	   
 	   	   }); 	   	   
 	   }
 	   
 	    
 	  /*TOTAL*/ 	  
 	  html+=row_item( '', '' , '', 'normal_line' );
 	  html+= row_total( '','');
 	   	  
 	  if(!empty(data.total_details.less_voucher)){
 	     html+= row_total( t("Less voucher"), "("+ data.total_details.less_voucher +")" , 1);
 	  }
 	  
 	  if(!empty(data.total_details.pts_redeem_amt)){
 	     html+= row_total( t("Redeem points"), "("+ data.total_details.pts_redeem_amt +")" , 1);
 	  }
 	  
 	  if(!empty(data.total_details.subtotal)){
 	     html+= row_total( t("Sub Total"), data.total_details.subtotal , 1);
 	  }
 	  
 	  if(!empty(data.total_details.delivery_charges)){
 	  html+= row_total( t("Delivery Fee"), data.total_details.delivery_charges , 1);
 	  }
 	  
 	  if(!empty(data.total_details.packaging_charge)){
 	  html+= row_total( t("Packaging Charge"), data.total_details.packaging_charge , 1);
 	  }
 	  
 	  if(!empty(data.total_details.tax)){
	 	  html+= row_total( data.total_details.tax.tax_label, 
	 	  data.total_details.tax.taxable_total , 1);
 	  }
 	  
 	  
 	  if(!empty(data.total_details.tips)){
 	  html+= row_total( data.total_details.tips.label, data.total_details.tips.value , 1);
 	  }
 	  
 	  if(!empty(data.total_details.total)){
 	  html+= row_total( t("Total"), data.total_details.total );
 	  }
 	    	   
	html+='</ons-list-item>';
	
	row = ons.createElement(html);
	list.appendChild(row);
	html=''; 
		
	/*ORDER HISTORY*/	 	
	if(history_data.length>0){		
	    html+='<ons-list-item>';
	     html+='<ons-row>';
	       html+='<ons-col vertical-align="center" class="to_center" >';
	        html+='<h4>'+ t("Order history") +'</h4>';
	       html+='</ons-col>';
	     html+='</ons-row>';
	     
	     html+='<ons-row>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  ><h4>'+ t("Date/Time") +'</h4></ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  ><h4>'+ t("Status") +'</h4></ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  ><h4>'+ t("Remarks") +'</h4></ons-col>';
	     html+='</ons-row>';
	     
	     $.each( history_data  , function( historykey, historyval ) {					
	     html+='<ons-row>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  >';
	       html+='<p>'+ historyval.date_created +'</p>';
	       html+='</ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  >';
	       html+='<p>'+ historyval.status +'</p>';
	       html+='</ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  >';
	       html+='<p>'+ historyval.remarks +'</p>';
	       html+='</ons-col>';
	     html+='</ons-row>';
	     });
	     
	    html+='</ons-list-item>';	    	  
	    
	    row = ons.createElement(html);
		list.appendChild(row);
		html=''; 
	}
	/*END ORDER HISTORY*/
		
	
};

getTransactionIcon = function(transaction_type){
	
	trans_icon ='';
	switch(transaction_type){
		case "pickup":
		  trans_icon='md-shopping-basket';
		break;
		
		case "dinein":
		  trans_icon='md-cutlery';
		break;
		
		default:
		  trans_icon='md-car';
		break
	}
	return trans_icon;
};

row_order_details = function(label_1, value_1, label_2, value_2, class_name1, class_name2){	
	html=''; 
	if(empty(class_name1)){
		class_name1='label';
	}
	if(empty(class_name2)){
		class_name2='label';
	}
	html+='<ons-row class="normal_line">';
	
	    html+='<ons-col vertical-align="top" width="50%"  class="to_left" >';
	     html+='<p>'+ label_1 +'</p>';
	     html+='<p class="'+ class_name1 +'">'+ value_1 +'</p>';
	    html+='</ons-col>';
	    
	    if(!empty(value_2)){
	    html+='<ons-col vertical-align="top" width="50%"  class="to_right" >';
	       html+='<p>'+ label_2 +'</p>';
	       html+='<p class="'+ class_name2 +'">'+ value_2 +'</p>';
	    html+='</ons-col>';
	    }
	    
     html+='</ons-row>';
	return html;
};

row_item = function(qty, name, total, class_name){
	html='';
	if(empty(class_name)){
		class_name='normal';
	}
	html+='<ons-row class="'+  class_name +'">';
    html+='<ons-col vertical-align="top" width="20%" > ';
      if(!empty(qty)){
         html+='<p>'+ qty +' x </p> ';
      }
    html+='</ons-col> ';
    html+='<ons-col vertical-align="top"  class="to_left" >';
     //html+='<p>'+ name +'</p>';
     html+=name;
    html+='</ons-col>';  	  
    html+='<ons-col vertical-align="top" width="30%"  class="to_right" >';
      html+='<p>'+ total +'</p>';
    html+='</ons-col>';     	  
   html+='</ons-row>';
   return html;
};

row_category = function($name){
	html='';
	html+='<ons-row class="normal">';
    html+='<ons-col vertical-align="center" width="25%" class="to_right" > ';
    html+='<h4>'+  $name +'</h4>';
    html+='</ons-col>';
    html+='</ons-row>';
    return html;
};

row_total = function($name, $value , $normal ){
	html='';
   html+='<ons-row class="normal">';
    html+='<ons-col vertical-align="center" width="20%" class="to_center" >';
    html+='</ons-col>';
    html+='<ons-col vertical-align="top"  class="to_left" >';
     if($normal==1){
        html+='<p>'+ $name +'</p>';
     } else {
     	html+='<h3>'+ $name +'</h3>';
     }
    html+='</ons-col>'; 	     	  
    html+='<ons-col vertical-align="top" width="30%"  class="to_right" >';
      if($normal==1){
        html+='<p>'+ $value +'</p>';
     } else {
     	html+='<h3>'+ $value +'</h3>';
     }
    html+='</ons-col>'; 	     	  
   html+='</ons-row>';
   return html;
}; 	  

displayPin = function(data){
	current_page_id = getCurrentPage();
	html='<ons-row>';
	$.each( data  , function( pin_key, pin_val ) {	
		
		html+='<ons-col vertical-align="center" width="25%" class="to_center" >';
	    html+='<div class="circle_brown">';
	      html+='<span class="numeric">'+ pin_val +'</span>';
	    html+='</div>';
	    html+='</ons-col>';
			
    });
    html+='</ons-row>';
    
    $("#"+ current_page_id +" .pin_show").html( html );
};

setLanguageList = function(data){	
	current_page_id = getCurrentPage(); html ='';	var row='';	
	var object = $("#"+ current_page_id + " ons-list" );
	var list = object[0];	
	
	html='<ons-list-header>'+ t("Available language") +'</ons-list-header>';
	row = ons.createElement(html);
	list.appendChild(row);
	html=''; 
	$.each( data  , function( data, val ) {
		
		html+='<ons-list-item tappable onclick="setLanguageCode('+ q(val.value) +')" >';
	       html+='<div class="left">';
		     html+='<img class="list-item__thumbnail" src="'+ val.image +'">';
		   html+='</div>';
	       html+='<div class="center">';
		    html+='<span class="list-item__title">'+ val.label +'</span>';
		    html+='<span class="list-item__subtitle">'+ val.sub_label +'</span>';
		  html+='</div>';
	    html+='</ons-list-item> ';
    
	    row = ons.createElement(html);
	    list.appendChild(row);
	    html=''; 
	    
	});		
};

setDeviceInfo = function(){
	current_page_id = getCurrentPage(); html ='';	var row='';	
	var object = $("#"+ current_page_id + " ons-list" );
	var list = object[0];	
	
	html='<ons-list-header>'+ t(device_platform) +'</ons-list-header>';
	row = ons.createElement(html);
	list.appendChild(row);
	html=''; 
	
	data = [
	{
	  'label':t("UID ID"),
	  'value': device_uiid
	},
	{
	  'label':t("Device ID"),
	  'value': device_id
	},
	];
	
	$.each( data  , function( data, val ) {
		
		html+='<ons-list-item tappable >';		  
	       html+='<div class="center">';
		    html+='<span class="list-item__title uid_id">'+  val.value +'</span>';
		    html+='<span class="list-item__subtitle">'+  val.label +'</span>';
		  html+='</div>';	      
	    html+='</ons-list-item>';
    
	    row = ons.createElement(html);
	    list.appendChild(row);
	    html=''; 
	    
	});		
};

setBookingCount = function(page_id, total){
	switch(page_id){
		case "todays_booking":
		  $(".booking_incoming_count").html( parseInt(total) );
		break;
		
		case "past_booking":
		  $(".booking_total_count").html( parseInt(total) );
		break;				
	}
};

setBookingList = function(page_id, data){
	var html =''; var row='';	
	var object = $("#" + page_id + " ons-list" );
	var list = object[0];
	setBookingCount(page_id,data.total);
	
	$new_booking_status = ['pending'];
	$booking_failed = ['denied'];
	$booking_succesful = ['approved','cancel_booking_approved'];
	$booking_request_cancel = ['request_cancel_booking'];
	
	$.each( data.data  , function( data, val ) {
		
		 $show_booking_action = false; 
		 $booking_action_0=''; $booking_action_1='';
		 $booking_label_0=''; $booking_label_1='';
		 
		 $found_new_booking = $.inArray( val.status_raw , $new_booking_status );
		 $found_booking_failed = $.inArray( val.status_raw , $booking_failed );	  
		 $found_booking_succesful = $.inArray( val.status_raw , $booking_succesful );
		 $found_booking_cancel = $.inArray( val.status_raw , $booking_request_cancel );
		 
		 if( $found_new_booking >=0){
		 	$show_booking_action=true;
		 	$booking_action_0 = 'accept'; $booking_action_1 = 'decline';
	    	$booking_label_0 = 'Accept'; $booking_label_1 = 'Decline';	   
		 } else if ( $found_booking_cancel>=0){
		 	$show_booking_action=true;
		 	$booking_action_0 = 'cancel_booking_approved'; $booking_action_1 = 'denied';
	    	$booking_label_0 = 'Approved'; $booking_label_1 = 'Denied';	   
		 }
		 
		 $list_modifier='';
	     if($found_booking_failed>=0){
	    	$list_modifier='status_red';
	     } else if ( $found_booking_succesful>=0){
	    	$list_modifier='status_green';
	     }
		
		 html+='<ons-list-item tappable modifier="booking_list '+ $list_modifier +'" data-date_created_raw="'+ val.date_created_raw +'" data-timezone="'+  val.timezone+'" data-booking_id="'+ val.booking_id +'" >';
		 
		 html+='<ons-row  onclick="booking_action('+ q("booking_details") + "," + q(val.booking_id) +')" >';
	      html+='<ons-col vertical-align="center" width="22%" class="to_center" >';
	          html+='<div class="kcircle">';
	            html+='<div class="inner_kcirle">';
	              html+='<ons-icon icon="md-drink"></ons-icon>';
	            html+='</div>';
	          html+='</div>';
	      html+='</ons-col>';
	      html+='<ons-col vertical-align="top" class="to_left">';
		    html+='<p>'+ t("Booking No. #") +  val.booking_id +'</p>';
		    html+='<h4><span class="kcircle_small">'+ val.number_guest +'</span> '+t("guest")+'</h4>';
		    
		    if(val.status_raw !="pending"){
		       html+='<p class="order_status">'+ t(val.status) +'</p>';
		    }
		    
		  html+='</ons-col>';
		  html+='<ons-col vertical-align="top" width="30%" class="to_right" >';
		    html+='<p><span class="created_time_stamp">'+ val.date_created+' </span> ';
		    html+='<ons-icon icon="md-time" class="ion_small" ></ons-icon></p>';
		    html+='<h4>'+ val.booking_name +'</h4>';
		  html+='</ons-col>';
	     html+='</ons-row>'; 				 
		 
		 if($show_booking_action){
		 	 html+='<div class="actions_wrap">';
		      html+='<ons-row>';
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        
		          html+='<ons-button modifier="quiet action_button" onclick="booking_action('+ q($booking_action_0) + "," + q(val.booking_id)  +')">';
		            html+='<div class="inner">';			        			        
			        html+='<ons-icon icon="md-check-circle"></ons-icon>';
			        html+='<span class="trn">'+ t($booking_label_0) +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
			      
		        html+='</ons-col>';
		        
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        
		          if(!empty($booking_action_1)){
		          html+='<ons-button modifier="quiet action_button button_decline" onclick="booking_action('+ q($booking_action_1) + "," + q(val.booking_id)  +')" >';
		            html+='<div class="inner">';			        
			        html+='<ons-icon icon="md-close-circle"></ons-icon>';
			        html+='<span class="trn">'+ t($booking_label_1) +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
		          }
		        
		        html+='</ons-col>';
		      html+='</ons-row>';
		    html+='</div>';
		 }
		 /*ACTION*/
		 
		 html+='</ons-list-item>';		 
		 
		 row = ons.createElement(html);
	     list.appendChild(row);
	     html=''; 
	});
		
};

setBookingCount = function(page_id, total){
	switch(page_id){
		case "todays_booking":
		  $(".booking_incoming_count").html( parseInt(total) );
		break;
		
		case "cancel_booking":
		  $(".booking_cancel_count").html( parseInt(total) );
		break;
		
		case "past_booking":
		  $(".booking_total_count").html( parseInt(total) );
		break;				
	}
};

setBookingDetails = function(data, history_data){
	page_id = getCurrentPage();
	
	var object = $("#" + page_id + " ons-list" );
	var list = object[0];	
		
	$("#"+ page_id + " .sub_title").html(  data.status );
	
	html='';
	
	$booking_failed = ['denied'];
	$booking_succesful = ['approved'];
	
	$found_booking_failed = $.inArray( data.status_raw , $booking_failed );	  
	$found_booking_succesful = $.inArray( data.status_raw , $booking_succesful );	  
	
    $list_modifier='';
    if($found_booking_failed>=0){
    	$list_modifier='status_red';
    } else if ( $found_booking_succesful>=0){
    	$list_modifier='status_green';
    }		 	
	     
	html+='<ons-list-item modifier="booking_list '+ $list_modifier +'">';
    
      html+='<ons-row>';
 	    html+='<ons-col vertical-align="center" width="25%" class="to_center" >';
 	       html+='<div class="kcircle">';
 	        html+='<div class="inner_kcirle">';
 	         html+='<ons-icon icon="md-drink"></ons-icon>';
 	        html+='</div>';
 	       html+='</div>';
 	    html+='</ons-col>';
 	    html+='<ons-col vertical-align="top"  class="to_left" >';
 	    html+='<h4>'+ data.booking_name +'</h4>';
 	    html+='<p>'+ data.date_created +'</p>'; 	    
 	    html+='</ons-col>';
 	    
 	    html+='<ons-col vertical-align="top" width="25%"  class="to_right" >';
 	     html+='<h4>'+ data.number_guest +'</h4>'; 	     
 	    html+='</ons-col>';
 	   html+='</ons-row>';
 	   
 	    html+='<ons-row class="normal_line">';
	 	    html+='<ons-col vertical-align="top"  class="to_left" >';
	 	     html+='<p>'+ t("Contact number") +'</p>';
	 	     html+='<p class="label">'+ data.mobile +'</p>';
	 	    html+='</ons-col>';
	 	    html+='<ons-col vertical-align="top" width="25%"  class="to_right" >';
	 	       if(!empty(data.mobile)){
		 	       html+='<ons-fab modifier="mini fabred" onclick="externalPhoneCall('+ q(data.mobile) +')" >';
		            html+='<ons-icon icon="md-phone"></ons-icon>';
		           html+='</ons-fab>';
	 	       }
	 	    html+='</ons-col> '; 
 	   html+='</ons-row>';
 	   
 	    html+=row_order_details( t("Date of booking"),  data.booking_time ,
 	    t("Booking time"), data.booking_time );
 	    
 	    html+=row_order_details( t("Instructions"),  data.booking_notes ,
 	    t("Remarks"), data.remarks );
 	   
    html+='</ons-list-item>';
    
	row = ons.createElement(html);
	list.appendChild(row);
	html=''; 
	
	/*HISTORY*/
	if(history_data.length>0){
		html+='<ons-list-item>';
	     html+='<ons-row>';
	       html+='<ons-col vertical-align="center" class="to_center" >';
	        html+='<h4>'+ t("Order history")+'</h4>';
	       html+='</ons-col>';
	     html+='</ons-row>';
	     
	     html+='<ons-row>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  ><h4>'+ t("Date/Time") +'</h4></ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  ><h4>'+ t("Status") +'</h4></ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  ><h4>'+ t("Remarks") +'</h4></ons-col>';
	     html+='</ons-row>';
	     
	     $.each( history_data  , function( historykey, historyval ) {					
	     html+='<ons-row>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  >';
	       html+='<p>'+ historyval.date_created +'</p>';
	       html+='</ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  >';
	       html+='<p>'+ historyval.status +'</p>';
	       html+='</ons-col>';
	       html+='<ons-col vertical-align="center" class="to_left"  width="33%"  >';
	       html+='<p>'+ historyval.remarks +'</p>';
	       html+='</ons-col>';
	     html+='</ons-row>';
	     });
	     
	    html+='</ons-list-item>';	    	  
	    
	    row = ons.createElement(html);
		list.appendChild(row);
		html=''; 
	}
	
};


setNotificationList = function(page_id, data){
	var html =''; var row='';	
	var object = $("#" + page_id + " ons-list" );
	var list = object[0];
	
	$.each( data.data  , function( data, val ) {
		
		$modifier='unread';
		if(val.is_read>0){
			$modifier='read';
		}
		
		row_id='row_'+val.id;
		
		html+='<ons-list-item tappable modifier="'+ $modifier +'" class="'+ row_id +'" data-status="'+ $modifier +'" >'; 
	 	  html+='<ons-row>';
		    html+='<ons-col vertical-align="center" width="25%" class="to_center" >';
		       html+='<div class="kcircle">';
		        html+='<div class="inner_kcirle">';
		         html+='<ons-icon icon="md-notifications-none"></ons-icon>';
		        html+='</div>';
		       html+='</div>';
		    html+='</ons-col>';
		    html+='<ons-col vertical-align="top"  class="to_left" >';
		    html+='<p>' + val.push_title+ '</p>';
		    html+='<p>' + val.push_message+ '</p>';
		    html+='<p>'+ val.date_created +'</p>';
		    html+='</ons-col>';
		    
		    html+='<ons-col vertical-align="top" width="25%"  class="to_right" >';
		       html+='<ons-icon icon="md-circle"></ons-icon>';
		    html+='</ons-col>';
		   html+='</ons-row>';
		   
		  if(val.is_read<=0){
		 	 html+='<div class="actions_wrap">';
		      html+='<ons-row>';
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        
html+='<ons-button modifier="quiet action_button" onclick="push_action('+ q('mark_read') + "," + q(val.push_logs) + ","  + q(val.id) +  "," + q(row_id)  +')">';
		            html+='<div class="inner">';			        			        
			        html+='<ons-icon icon="md-check-circle"></ons-icon>';
			        html+='<span class="trn">'+ t("Mark as read") +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
			      
		        html+='</ons-col>';
		        
		        html+='<ons-col vertical-align="center" width="50%" class="to_center" > ';
		        		          
html+='<ons-button modifier="quiet action_button button_decline" onclick="push_action('+ q('remove') + "," + q(val.push_logs)  + "," + q(val.id) +  "," + q(row_id) +')">';
		            html+='<div class="inner">';			        
			        html+='<ons-icon icon="md-close-circle"></ons-icon>';
			        html+='<span class="trn">'+ t("Remove") +'</span>';
			        html+='</div>';
			      html+='</ons-button>';
		        
		        
		        html+='</ons-col>';
		      html+='</ons-row>';
		    html+='</div>';
		 }
		 /*ACTION*/  
		   
	     html+='</ons-list-item>';
		   
	     row = ons.createElement(html);
		 list.appendChild(row);
		 html='';  
	});
};	

timeList = function(is_minute){
	time_data = []; $temp = [];
	var i; $data_lenght = 24;
	
	if(is_minute){
		$data_lenght=60;
	}
	
	for (i = 0; i < $data_lenght; i++) { 
		$hour = str_pad(i,2,0,'STR_PAD_LEFT');
		$temp = {
			"value":$hour,
			"label":$hour
		};
		time_data.push( $temp );
	}  
	return time_data;
};

function str_pad (input, pad_length, pad_string, pad_type) {
	
  var half = '',
    pad_to_go;

  var str_pad_repeater = function (s, len) {
    var collect = '',
      i;

    while (collect.length < len) {
      collect += s;
    }
    collect = collect.substr(0, len);

    return collect;
  };

  input += '';
  pad_string = pad_string !== undefined ? pad_string : ' ';

  if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') {
    pad_type = 'STR_PAD_RIGHT';
  }
  if ((pad_to_go = pad_length - input.length) > 0) {
    if (pad_type == 'STR_PAD_LEFT') {
      input = str_pad_repeater(pad_string, pad_to_go) + input;
    } else if (pad_type == 'STR_PAD_RIGHT') {
      input = input + str_pad_repeater(pad_string, pad_to_go);
    } else if (pad_type == 'STR_PAD_BOTH') {
      half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
      input = half + input + half;
      input = input.substr(0, pad_length);
    }
  }
  return input;
}

setTimePickerOptions = function(page_id , target, field_target,  data, width){
	html='';	
	if(!empty(data)){		
		html+='<ons-carousel fullscreen swipeable auto-scroll overscrollable  item-width="'+width+'%" >';
		$.each( data  , function( key, val ) {			
			html+='<ons-carousel-item class="time_class_'+ val.value  +'" onclick="setValue('+q(page_id)+ "," + q(target) + "," + q(field_target)  + ',$(this),'+ q(val.value) +')" >';
              html+='<p>'+ val.label +'</p> ';
            html+='</ons-carousel-item>';
		});
		html+='</ons-carousel>';
		$("#"+page_id + " ."+ target).html( html );
	}
	
	temp_value = $("."+field_target).val();	
	if(!empty(temp_value)){
		$("#"+page_id + " ."+ target).find(".time_class_"+ temp_value ).addClass("active");
	}
};

setValue = function(dialog_id, target, field_target , object, value){	
	object2 = $("#"+dialog_id + " ."+ target + " ons-carousel ons-carousel-item");	
	object2.removeClass("active");
	object.addClass("active");	
		
	$("#"+dialog_id + " ."+ field_target).val( value );
};
