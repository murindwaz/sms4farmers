(function(){
	
	window.Customer = Backbone.Model.extend({
		id : "_id", 
		url : function(){
			return this.get('id') ? '#!customer' + this.get('id') : '#!customers';
		},
		defaults : function(){
			return { id : 0, telephone : "-", name: "", active : false, created: '0000-00-00 00-00-00' }
		}
		
	});
	window.Message = Backbone.Model.extend({
		id : "_id", 
		url : function(){
			return this.get('id') ? '#!message/' + this.get('id') : '#!messages';
		},
		defaults : function(){
			/**@todo check if a customer can be added */
			return { id : 0, message : "-", received: '0000-00-00 00-00-00', customer : new Customer()  }
		}
	});
	window.Stock = Backbone.Model.extend({
		id : "_id", 
		url : function(){
			return this.get('id') ? '#!stock/' + this.get('id') : '#!stocks';
		},
		defaults : function(){
			return { id : 0, crop: "", quantity: 0, location: "", category: "offer", price : 0, message : new Message() }
		}
		
	});
	
	//collections 
	window.CustomerCollection = Backbone.Collection.extend({ model: Customer, url : '#!customers' });
	window.MessageCollection = Backbone.Collection.extend({ model: Message, url : '#!messages' });
	window.StockCollection = Backbone.Collection.extend({ model: Stock, url : '#!stocks' });
	
	
	
	
	
	
})(window);