public with sharing class FileLoader {

	@AuraEnabled(cacheable=true)
	public static List<String> getCities() {
		StaticResource srObject = [SELECT Id, body FROM StaticResource WHERE Name = 'CitiesList'];
		String contents = srObject.body.toString();
		return contents.split('\n');
	}
}
