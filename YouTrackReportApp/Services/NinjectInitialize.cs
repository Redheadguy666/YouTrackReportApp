using System;
using System.Collections.Generic;
using Ninject;
using YouTrackReportsApp.Services;
using System.Web.Mvc;
using YouTrackReports.Services;

namespace TraineeshipWebApp.NinjectInitialize
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;

        public NinjectDependencyResolver(IKernel kernelParam)
        {
            this.kernel = kernelParam;
            AddBindings();
        }
        public object GetService(Type serviceType) => kernel.TryGet(serviceType);
        public IEnumerable<object> GetServices(Type serviceType) => kernel.GetAll(serviceType);

        private void AddBindings()
        {
            kernel.Bind<IYouTrackDataService>().To<YouTrackDataService>();
            kernel.Bind<IReportService>().To<ReportService>();
            kernel.Bind<IPercentageReportService>().To<PercentageReportService>();
        }
    }
}