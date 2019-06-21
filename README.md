# YAML Directory Loader

This webpack loader loads a directory full of yaml documents, e.g.

```
directory
- a.yaml
- sub_directory
  - b.yaml
  - c.yaml
```

```javascript
import yamlDocuments from 'yaml-directory-loader!./directory'

console.log(yamlDocuments)
/* [
 *  { kind: 'FileA', stuff: 'from a.yaml' },
 *  { kind: 'FileB', stuff: 'from b.yaml' },
 *  { kind: 'FileC', stuff: 'from c.yaml' },
 * ]
 */
```

This doesn't currently output the file paths for the files. This is an
intentional design choice. If you'd like that feature, leave an issue.
