using System;
using System.Dynamic;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using YouTrackSharp.Admin;

namespace YouTrackSharp.Issues
{
    public class WorkItem : DynamicObject
    {
        readonly IDictionary<string, object> allFields = new Dictionary<string, object>(StringComparer.InvariantCultureIgnoreCase);
        string id;

        public string Id
        {
            get { return id ?? (id = (string)allFields["id"]); }
        }

        public ExpandoObject ToExpandoObject()
        {
            IDictionary<string, object> expando = new ExpandoObject();

            foreach (dynamic field in allFields)
            {
                expando.Add(field.Key.ToLower(), field.Value);
            }
            return (ExpandoObject)expando;
        }

        public override bool TryGetMember(GetMemberBinder binder, out object result)
        {
            if (allFields.ContainsKey(binder.Name))
            {
                result = allFields[binder.Name];
                return true;
            }

            return base.TryGetMember(binder, out result);
        }

        public override bool TrySetMember(SetMemberBinder binder, object value)
        {
            if (String.Compare(binder.Name, "field", StringComparison.OrdinalIgnoreCase) == 0)
            {
                foreach (var val in (IEnumerable<dynamic>)value)
                {
                    allFields[val.name] = val.value;
                }
                return true;
            }

            allFields[binder.Name] = value;
            return true;
        }

    }
}
