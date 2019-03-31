# Cognitive Complexity Example

## これは何
- `index.ts` や `index.rb` を適当に編集してコマンドを打つと、[Cognitive Complexity](https://docs.codeclimate.com/docs/cognitive-complexity) を算出してくれるよ
- ※Windows非対応

## Usage

```bash
$ docker run  --interactive --tty --rm  --env CODECLIMATE_CODE="$PWD"  --volume "$PWD":/code  --volume /var/run/docker.sock:/var/run/docker.sock  --volume /tmp/cc:/tmp/cc  codeclimate/codeclimate analyze ./
```

## License
[MIT](LICENSE).
