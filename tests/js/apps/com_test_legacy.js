﻿F2.Apps['com_test_legacy'] = (function() {

	function AppClass(instanceId, appConfig, data, root) {
		this.instanceId = instanceId;
		this.appConfig = appConfig;
		this.data = data;
		this.root = root;

		window.com_test_legacy = instanceId;
	}

	AppClass.prototype.dispose = function() {
		delete window.com_test_legacy;
	};

	return AppClass;

})();