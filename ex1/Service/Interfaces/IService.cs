using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Interfaces
{
    internal interface IService
    {
        Task<List<string>> GetAll();
        List<string> GetList();
    }
}
