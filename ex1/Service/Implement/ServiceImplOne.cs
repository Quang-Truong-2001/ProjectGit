﻿using Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Implement
{
    internal class ServiceImplOne : IServiceOne
    {
        public Task<List<string>> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
