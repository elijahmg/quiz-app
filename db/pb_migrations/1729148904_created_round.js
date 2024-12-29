/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hbvlolbq9cf5mwi",
    "created": "2024-10-17 07:08:24.943Z",
    "updated": "2024-10-17 07:08:24.943Z",
    "name": "round",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y2oqfumn",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5el44kxm",
        "name": "quiz",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "txjw2b0o16u6xij",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hbvlolbq9cf5mwi");

  return dao.deleteCollection(collection);
})
