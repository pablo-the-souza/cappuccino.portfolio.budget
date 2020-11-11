
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Cappuccino.Portfolio.Budget.API.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoriesController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoriesController(DataContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Category>> GetCategories()
        {
            return _context.Categories.ToList();
        }

        // [HttpGet("{id}", Name = "GetCategoryById")]
        // public ActionResult<Category> GetCategoryById(int id)
        // {
        //     return _context.Categories.Find(id);
        // }

        // [HttpPost]
        // public ActionResult<Category> AddCategory(Category Category)
        // {
        //     _context.Categories.Add(Category);
        //     _context.SaveChanges();

        //     return CreatedAtAction("GetCategoryById", new { id = Category.Id }, Category);
        // }

        // [HttpDelete("{id}")]
        // public ActionResult<Category> DeleteCategory(int id)
        // {
        //     var categoryForDeletion = _context.Categories.FirstOrDefault(r => r.Id == id);
        //     _context.Categories.Remove(categoryForDeletion);
        //     _context.SaveChanges();
        //     return Ok();
        // }

        // [HttpPut("{id}")]
        // public ActionResult<Category> UpdateCategory(int id, [FromBody] Category Category)
        // {
        //     var categoryForUpdate = _context.Categories.FirstOrDefault(r => r.Id == id);
        //     categoryForUpdate.Name = Category.Name; 
        //     categoryForUpdate.Value = Category.Value;
        //     categoryForUpdate.CategoryId = Category.CategoryId; 
        //     categoryForUpdate.Type = Category.Type; 

        //     _context.SaveChanges();

        //     return Ok();
        // }
    }
}

