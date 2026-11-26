import importlib.util
import tempfile
import unittest
from pathlib import Path

spec=importlib.util.spec_from_file_location("importer",Path(__file__).resolve().parents[1]/"tools/import-private-html.py")
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class TestImport(unittest.TestCase):
    def test_synthetic(self):
        cfg={"question_selector":".q","number_attr":"data-n","stem_selector":".stem","choice_selector":".choice","choice_number_attr":"data-n","answer_attr":"data-correct","explanation_selector":".explanation","confirmed_20_question_subject_order":True}
        rows=[]
        for n in range(1,81):
            answer=' data-correct="3"' if n!=2 else ""
            choices="".join(f'<div class="choice" data-n="{k}">synthetic choice {k}</div>' for k in [4,2,3,1])
            rows.append(f'<section class="q" data-n="{n}"{answer}><div class="stem">synthetic {n}</div>{choices}<div class="explanation">synthetic explanation</div></section>')
        with tempfile.TemporaryDirectory() as d:
            root=Path(d);html=root/"synthetic.html";html.write_text("".join(rows),encoding="utf-8")
            output=root/"archive";result=m.convert(html,cfg,"2020-08-22",output)
            self.assertEqual(result["questions"],80);self.assertEqual(result["explicit_answers"],79)
            data=m.json.loads((output/"automotive-2020-08-22.json").read_text(encoding="utf-8"))
            self.assertEqual(data["questions"][0]["choices"][0],"synthetic choice 1")
            self.assertEqual(data["questions"][0]["answer"],3);self.assertIsNone(data["questions"][1]["answer"])
            self.assertEqual(data["questions"][20]["original_subject"],"legacy_engine")
            html.write_text("".join(rows[:-1]),encoding="utf-8")
            with self.assertRaises(ValueError):m.convert(html,cfg,"2020-08-22",root/"bad")
if __name__=="__main__":unittest.main()
