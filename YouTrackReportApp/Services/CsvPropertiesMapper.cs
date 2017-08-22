using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YouTrackReports.Models.Youtrack;

namespace YouTrackReports.Services
{
    public sealed class CsvPropertiesMapper : CsvClassMap<IndividualEmploymentModel>
    {
        public CsvPropertiesMapper()
        {
            Map(f => f.Id).Name("№");
            Map(f => f.Developer).Name("Разработчик");
            Map(f => f.ScopeOfWork).Name("Объем работ");
            Map(f => f.ParticipationDegree).Name("Степень участия");
        }
    }
}