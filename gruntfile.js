module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: true
            },
            dist: {
                files: {
                    '.tmp/styles/ng-pfi.css': 'src/styles/ng-pfi.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions', 'ie 10-11']})
                ]
            },
            dist: {
                src: '.tmp/styles/ng-pfi.css'
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/ng-prettify-file-input.min.js': ['src/ng-prettify-file-input.js']
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['.tmp/**'],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [ 'dist', '.tmp' ]
                }]
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['build']);

    // Build task
    grunt.registerTask('build', ['clean', 'sass', 'postcss', 'copy', 'uglify']);
};
