const assert = require('assert');
const fs = require('fs');
const { exec } = require("child_process");

describe('svg2pdf', function() {
    it('should correctly convert svg file to pdf file', function() {
        cmd = 'node ./bin/index.js -w 50 -h 50 ./test/test.svg ./test/test.pdf';
        if (fs.existsSync('./test/test.pdf'))
            fs.unlinkSync('./test/test.pdf');
        assert.equal(fs.existsSync('./test/test.pdf'), false);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            assert.equal(fs.existsSync('./test/test.pdf'), true);
            var pdfFile = fs.readFileSync('./test/test.pdf');
            assert.equal(pdfFile.includes('/Resources'), true);
            assert.equal(pdfFile.includes('/MediaBox'), true);
            assert.equal(pdfFile.includes('/Contents'), true);
            assert.equal(pdfFile.includes('/StructParents'), true);
            assert.equal(pdfFile.includes('/Parent'), true);
            assert.equal(pdfFile.includes('/Count'), true);
        });
        return;
    });
});
