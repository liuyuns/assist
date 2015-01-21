
var records = [

{name: 'RACK_NAME_PARAM_TYPE_MGR', iid: 'IMicParamTypeMgr'},
{name: 'RACK_NAME_BROWSER_MASTER', iid: 'IWIBrowserMaster'},
{name: 'RACK_NAME_OBJECT_MANAGER', iid: 'IObjectManager'},
{name:'test', iid: "ITest"}

];

var records_fixed = [];

var recid = 1;
records.map(function(r){
 r.recid = recid++;
 records_fixed.push(r);
});

$('#racks').w2grid({
  name: 'grid',
  show: {
    toolbar: true, footer:true
  },
  multiSearch:true,
  header: ' list of names',
  columns: [
{field: 'name', caption: 'Rack Name', size: '30%'},
{field: 'iid', caption: 'interface', size: '60%'}
],
records: records_fixed
});

