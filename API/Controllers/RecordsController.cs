
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Cappuccino.Portfolio.Budget.API.Controllers
{
    [ApiController]
    [Route("api/records")]
        public class RecordsController : ControllerBase
        {
            private readonly DataContext _context;

            public RecordsController(DataContext context)
            {
                _context = context;
            }
            
            [HttpGet]
            public ActionResult<IEnumerable<Record>> GetRecords()
            {
                return _context.Records
                .Include(r => r.Category)
                .ToList();
            }

            [HttpGet("{id}", Name = "GetRecordById")]
            public ActionResult<Record> GetRecordById(int id)
            {
                return _context.Records.Find(id);
            }

            [HttpPost]
            public ActionResult<Record> AddRecord(Record record)
            {
                // var recordToAdd
                _context.Records.Add(record);
                _context.SaveChanges();

                return CreatedAtAction("GetRecordById", new { id = record.Id }, record);
            }

        [HttpDelete("{id}")]
        public ActionResult<Record> DeleteRecord(int id)
        {
            var recordForDeletion = _context.Records.FirstOrDefault(r => r.Id == id);
            _context.Records.Remove(recordForDeletion);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult<Record> UpdateRecord(int id, [FromBody] Record record)
        {
            var recordForUpdate = _context.Records.FirstOrDefault(r => r.Id == id);
            recordForUpdate.Name = record.Name; 
            recordForUpdate.Value = record.Value;
            recordForUpdate.CategoryId = record.CategoryId; 
            recordForUpdate.Type = record.Type; 

            _context.SaveChanges();

            return Ok();
        }
    }
}

