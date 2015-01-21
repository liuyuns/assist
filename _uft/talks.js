
var records = [

{item: 'FireFox new version 37+', desc: 'SDK requires at least VS2013(C++11)'},
{item: 'Web Event Recording configuration', desc: 'start working'},
{item: 'AUT which overrides default functions', desc: 'UFT cannot support e.g. JSON or Array is rewritten'},
{item:'test', desc: "ITest"}

];

var records_fixed = [];

var recid = 1;
records.map(function(r){
 r.recid = recid++;
 records_fixed.push(r);
});

$('#talks').w2grid({
  name: 'grid-talks',
  show: {
    toolbar: true, footer:true
  },
  multiSearch:true,
  header: ' list of items',
  columns: [
{field: 'item', caption: 'Rack Name', size: '30%'},
{field: 'desc', caption: 'interface', size: '60%'}
],
records: records_fixed
});

