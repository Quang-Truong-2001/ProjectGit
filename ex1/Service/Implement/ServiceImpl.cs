﻿using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Implement
{
    internal class ServiceImpl : IService
    {
        public Task<List<string>> GetAll()
        {
            List<string> list = new List<string>();
            throw new NotImplementedException();
        }

        public List<string> GetList()
        {
            throw new NotImplementedException();
        }
    }
}
