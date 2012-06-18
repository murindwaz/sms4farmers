(function(){
	
	window.CustomerTableView = Backbone.View.extend(
			{
				template: "#customerTableView",
				events:{},
				initialize: function(){
					_.bindAll(this, 'render', 'show');
					this.collection.fetch();
					this.collection.bind('all', this.render);
				},
				show: function(){}, 
				render: function(){
					$(this.el).html( $(this.template).html() );
					this.collection.each( function(cat) {
						var template = "";
						$(this.el).find(".categories").append(template);
					}, this);
					return this;
				}
			});

/**
 * <li data-id='"+cat.get("id")+"'>"+cat.get('name')+"<a href='#' class='btn pull-right delete'>x</a></li>
 * 
 * **/	
	
})(window);