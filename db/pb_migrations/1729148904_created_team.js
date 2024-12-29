/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fmio6hzc6kpuuim",
    "created": "2024-10-17 07:08:24.944Z",
    "updated": "2024-10-17 07:08:24.944Z",
    "name": "team",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cohnjy83",
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
        "id": "dyy0wmii",
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
  const collection = dao.findCollectionByNameOrId("fmio6hzc6kpuuim");

  return dao.deleteCollection(collection);
})
