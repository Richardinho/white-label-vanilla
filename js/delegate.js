function delegate(el, config) {
	Object.keys(config).forEach(function (key) {
		let listener = config[key];
		let event;
		let selector;

		if(key.search(/\s/) == -1) {
			event = key;
		} else {
			const eventSelector = splitEventFromSelector(key);
			event = eventSelector[0];
			selector = eventSelector[1];
		}

		el.addEventListener(event, function (event) {
			if(!selector) {
				listener(event);
			} else {
				let target = event.target;

				while(target !== el) {
					if (target.matches(selector)) {
						listener(convertEvent(event, el, target))
					}
					target = target.parentNode
				}
			}
		});
	});
}

function splitEventFromSelector(srcString) {
	return srcString.match(/^(\S+)\s+(\S.*)?$/).slice(1);
}

function convertEvent(event, currentTarget, target){
	return Object.assign({}, event, {
		currentTarget : currentTarget,
		target : target,
		preventDefault : event.preventDefault.bind(event),
		stopPropagation : event.stopPropagation.bind(event)
	});
}

module.exports = delegate;
