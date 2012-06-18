(function(){
	
	window.CustomersView = Backbone.View.extend(
			{
				template: "#customersView",
				events:{},
				initialize: function(){
					_.bindAll(this, 'render', 'show');
					this.collection.fetch();
				
					this.collection.bind('all', this.render);
				},
				show: function(){}, 
				render: function(){
					$(this.el).html( $(this.template).html() );
					this.collection.each( function(customer) {
						var template = "<li><div class='customer-telephone'>"+customer.get('telephone')+"</div></li>";
						$(this.el).find("#customer-list").append(template);
					}, this);
					return this;
				}
			});

	window.MessagesView = Backbone.View.extend(
			{
				template: "#messagesView",
				events:{},
				initialize: function(){
					_.bindAll(this, 'render', 'show');
					this.collection.fetch();
				
					this.collection.bind('all', this.render);
				},
				show: function(){}, 
				render: function(){
					$(this.el).html( $(this.template).html() );
					this.collection.each( function(message) {
						var template = "<li><div class='message'>"+message.get('message')+"</div></li>";
						$(this.el).find("#message-list").append(template);
					}, this);
					return this;
				}
			});

	window.StockView = Backbone.View.extend(
			{
				template: "#stockView",
				events:{},
				initialize: function(){
					_.bindAll(this, 'render', 'show');
					this.collection.fetch();
				
					this.collection.bind('all', this.render);
				},
				show: function(){}, 
				render: function(){
					$(this.el).html( $(this.template).html() );
					this.collection.each( function(stock) {
						var template = "<li><div class='stock'>"+stock.get('name')+" @ "+stock.get('price')+"</div></li>";
						$(this.el).find("#stock-list").append(template);
					}, this);
					return this;
				}
			});

/**
 * <li data-id='"+cat.get("id")+"'>"+cat.get('name')+"<a href='#' class='btn pull-right delete'>x</a></li>
 * 
 * **/	
	
})(window);