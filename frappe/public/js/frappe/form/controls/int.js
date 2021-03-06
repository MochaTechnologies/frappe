frappe.ui.form.ControlInt = frappe.ui.form.ControlData.extend({
	make: function() {
		this._super();
		// $(this.label_area).addClass('pull-right');
		// $(this.disp_area).addClass('text-right');
	},
	make_input: function() {
		var me = this;
		this._super();
		this.$input
			// .addClass("text-right")
			.on("focus", function() {
				if(!document || !document.activeElement) return;
				document.activeElement.value
					= me.validate(document.activeElement.value);
				document.activeElement.select();
				return false;
			});
	},
	eval_expression: function(value) {
		if (typeof value === 'string') {
			value = strip(value);
			if (value.match(/^[0-9+\-/* .,()]+$/)) {
				value = strip_number_groups(value);
				// If it is a string containing operators
				try {
					return eval(value);
				} catch (e) {
					// bad expression
					return value;
				}
			}
		}
		return value;
	},
	parse: function(value) {
		return cint(this.eval_expression(value), null);
	}
});
